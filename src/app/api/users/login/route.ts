import dbConnect from "@/app/lib/db"
import adminModal from "@/services/modals/userSchema"

export async function POST(req: Request,) {
    try {
        await dbConnect()
        const body = await req.json()
        if (!body.userName || !body.password)
            return new Response("All fields are Mandatory", { status: 400 })

        const user = await adminModal.findOne({ userName:body.userName })
        if (!user)
            return new Response("Invalid username or password", { status: 400 })

        // let validPassword = await bcrypt.compare(password, user.password);
        // if (!validPassword)
        //     return res.status(400).json({ message: "Invalid Number or password" });

        // const token = await createToken(user._id);

        return Response.json({ _id: user._id, userName: user.userName, isLoggedIn: true, })
    } catch (err) {
        return Response.json({ error: 'Failed to login' })
    }
}