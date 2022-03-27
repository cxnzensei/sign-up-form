import { useState } from "react"

const ContactForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const setter = (message) => {
        const notif = document.getElementById('notif')
        notif.innerText = message
    }

    const reset = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setPassword('')
        setConfPassword('')
    }

    const buttonSetter = (text) => {
        const button = document.getElementById('button')
        button.innerText = 'ACCOUNT CREATED!'
        setTimeout(() => {
            button.innerText = 'CREATE ACCOUNT'
        }, 2000);
    }

    const submit = (e) => {
        e.preventDefault()
        if(password !== confPassword) {
            setter(`passwords don't match`)
        }
        else {
            setter('')
            buttonSetter('ACCOUNT CREATED')
            reset()
        }
    }
    
    return (
        <div>
            <div className="px-10 py-8 shadow-xl">
                <div className="w-3/4">
                    <div className="font-semibold text-2xl">
                        Let's do this!
                    </div>
                    <form className="relative" onSubmit={submit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-x-10 lg:gap-y-6 gap-4 mt-7">
                            <div className="font-semibold text-gray-700">
                                <div className="tracking-wider">FIRST NAME</div>
                                <input 
                                    type="text"
                                    required={true}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} 
                                    className="outline-none w-full rounded border-2 px-2 py-1" 
                                />
                            </div>
                            <div className="font-semibold text-gray-700">
                                <div className="tracking-wider">LAST NAME</div>
                                <input 
                                    type="text"
                                    required={true}
                                    onChange={(e) => setLastName(e.target.value)} 
                                    value={lastName} 
                                    className="outline-none w-full rounded border-2 px-2 py-1" 
                                />
                            </div>
                            <div className="font-semibold text-gray-700">
                                <div className="tracking-wider">EMAIL</div>
                                <input 
                                    type="email"
                                    required={true}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    value={email} 
                                    className="outline-none w-full rounded border-2 px-2 py-1" 
                                />
                            </div>
                            <div className="font-semibold text-gray-700">
                                <div className="tracking-wider">PHONE NUMBER</div>
                                <input 
                                    type="tel"
                                    required={true}
                                    onChange={(e) => setPhone(e.target.value)} 
                                    value={phone} 
                                    className="outline-none rounded w-full border-2 px-2 py-1" 
                                />
                            </div>
                            <div className="font-semibold text-gray-700">
                                <div className="tracking-wider">PASSWORD</div>
                                <input 
                                    type="password"
                                    required={true}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    value={password} 
                                    className="outline-none rounded w-full border-2 px-2 py-1" 
                                />
                                <div className="text-red-500 pl-1 h-3 text-sm" id="notif"></div>
                            </div>
                            <div className="font-semibold text-gray-700">
                                <div className="tracking-wider">CONFIRM PASSWORD</div>
                                <input
                                    value={confPassword}
                                    required={true} 
                                    onChange={(e) => setConfPassword(e.target.value)} 
                                    type="password" 
                                    className="outline-none rounded w-full border-2 px-2 py-1" 
                                />
                            </div>
                        </div>
                        <div className="my-14 absolute flex flex-col items-start">
                            <button id="button" type="submit" className="border outline-none px-14 py-4 font-bold text-xl text-white shadow-md rounded-xl bg-green-800">Create Account</button>
                            <div className="my-3 font-bold text-base md:text-xl">Already have an account? <span className="text-green-800">Log in</span></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ContactForm
