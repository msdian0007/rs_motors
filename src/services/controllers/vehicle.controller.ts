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

const getAll = async () => {
    try {
        return await vehicleModal.find({})
    } catch (err) {
        console.log(err)
    }
}

const getVehicleDetail = async (id: string) => {
    try {
        return await vehicleModal.findOne({ _id: id })
    } catch (err) {
        console.log(err)
    }
}

const getNewStock = async () => {
    try {
        return await vehicleModal.find({}, { coverImage: 1, brand: 1, modelName: 1 }).sort({ _id: -1 }).limit(11)
    } catch (err) {
        console.log(err)
    }
}

export const vehicleControllers = {
    create,
    getAll,
    getNewStock,
    getVehicleDetail,
}