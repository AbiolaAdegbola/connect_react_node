import axios from "axios";
import { useForm } from "react-hook-form";

const Contact = () => {

    let { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        const field = {
            nom: data.nom,
            email: data.email,
            telephone: data.telephone,
            message: data.message
        }

       await insertExecute(field)
    }
        
    const insertExecute = async (field) => {
            
        const response = await axios.post('http://localhost:5050/api/v1/utilisateurs', field)

        console.log(response)
    }

    return (
    <div className="Contact">

        <h1 className="text-2xl mb-10">Inscription</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label className="block" htmlFor="nom">Nom </label>
                <input type="text" {...register("nom")} name="nom" id="nom" placeholder="Votre nom" style={{width:400}} className="border p-2 rounded-lg" />
            </div>
            <div className="mb-5">
                <label className="block" htmlFor="email">Email </label>
                <input type="email" {...register("email")} name="email" id="email" placeholder="Votre adresse mail" style={{width:400}} className="border p-2 rounded-lg" />
            </div>
            <div className="mb-5">
                <label className="block" htmlFor="telephone">Numéro</label>
                <input type="number" {...register("telephone", { required: true })} name="telephone" id="telephone" style={{width:400}} placeholder="Votre numéro de téléphone" className="border p-2 rounded-lg" />
                {errors.telephone && <span>This field is required</span>}
            </div>
            <div className="mb-5">
                <label className="block" htmlFor="message">Message </label>
                <textarea cols="30" {...register("message")} rows="5" name="message" id="message" placeholder="Message" style={{width:400}} className="border p-2 rounded-lg"></textarea>
            </div>
            <input type="submit" style={{cursor:"pointer",borderRadius:"10px"}}
             className="bg-neutral-50 p-5 m-10 mt-0 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"/>
  
        </form>
    </div>)
}

export default Contact;