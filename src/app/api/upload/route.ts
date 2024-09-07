import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import s3 from '../../../../aws-config';
import { NextApiRequest, NextApiResponse } from 'next';

interface MulterRequest extends NextApiRequest {
    file: any;
}

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB file size limit
    },
});


// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

export async function POST(req: Request) {
    try {
        // Upload file to S3
        const formData = await req.formData()
        const file = formData.get('file')
        if (file instanceof File) {
            const key = `uploads/${uuidv4()}_${file.name}`;
            const buffer = Buffer.from(await file.arrayBuffer());
            const params = {
                Bucket: process.env.S3_BUCKET,
                Key: key,
                Body: buffer,
            };
            await s3.upload(params).promise();
            // Return S3 file URL
            const fileUrl = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`;
            return Response.json({ url: fileUrl });

        }
    } catch (error) {
        console.error('Error uploading file to S3:', error);
        return Response.json({ error: 'Failed to upload file to S3' });
    }
};