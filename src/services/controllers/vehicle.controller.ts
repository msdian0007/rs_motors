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

const getAll = async (req: Request) => {
    try {
        const vehicle = await vehicleModal.find({})
        return vehicle

    } catch (err) {
        console.log(err)
    }
}

export const vehicleControllers = {
    create,
    getAll,
}