import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import ProjectForm from "@/components/Projects/ProjectForm"
import { ProjectFormData } from "@/types/index"
import {createProject} from '@/api/ProjectAPI'

export default function CreateProjectView() {

    const navigate =  useNavigate()
    
    const initialValues : ProjectFormData = {
        projectName: "",
        clientName: "",
        description: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const {mutate} = useMutation({
        mutationFn: createProject,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            navigate('/')
        }
    })

    const handleForm = (formData : ProjectFormData) => mutate(formData)

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-black">Crear Proyecto</h1>
                <p className="text-xl font-light text-gray-500 mt-1">Llena el siguiente formulario para crear un proyecto</p>
                <nav className="my-2">
                    <Link
                        to={'/'}
                        className="bg-purple-400 hover:bg-purple-500 px-2 py-1 text-white text-xl font-bold cursor-pointer transition-colors"
                    >
                        Volver a proyectos
                    </Link>
                </nav>

                <form
                    className="mt-10  bg-white shadow-lg p-10 rounded-lg"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <ProjectForm 
                        register={register}
                        errors={errors}
                    />
                    <input type="submit" value={`Crear Proyecto`} className="bg-fuchsia-600 w-full p-3 text-white uppercase font-bold hover:bg-fuchsia-700 cursor-pointer transition-colors" />
                </form>
            </div>
        </>
    )
}
