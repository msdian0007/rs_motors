import vehicleModal from "@/services/modals"

const create = async (req: Request) => {
    try {
        const body = await req.json()
        const vehicle = new vehicleModal(body)
        return await vehicle.save()

    } catch (err) {
        console.log(err)
    }
}

export const vehicleControllers = {
    create
}