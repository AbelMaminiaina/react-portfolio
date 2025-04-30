    // Add useRef for scroll

import React from 'react'
import {useState, useRef, useEffect} from 'react'
import './Contact.css'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    name:yup.string().required("Name is required").min(2,"Name must be a least 2 characers"),
    email:yup.string().required("Email is required").email("Must be a valid email"),
    message:yup.string().required("Message is required").min(20,"Email must be a least 20 characers")
}).required(); //validation with Yup

const Contact = () => {

    const { 
        register, 
        handleSubmit, 
        reset, // ✅ Add reset here
        formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(""); 
    const [submitted, setSubmitted] = useState(false);  
    const confirmationRef = useRef(null); // Reference for a scroll   

    const onSubmit = async (data) => {

        setLoading(true); // On indique send loading
        setResponseMessage(""); // next message null
        
        try {
            console.log("sending data : ", data);
            const access_key = "dd0efc7f-d9a6-4185-a4bd-a1debc84a900"; 
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  access_key: access_key,
                  ...data, // data form (email, message, etc.)
                }),
              });

              if (response.ok) {
                setResponseMessage("✅ Sending message with success !");
                setSubmitted(true);

                reset(); // <-- this line clears the form
              } else {
                setResponseMessage(`Error: ${result.message}`);
              }

        } catch (error) {
            console.error("Send error form:", error);
            setResponseMessage("An error maked. Please try."); 
        } finally {
            setLoading(false);
        }     

        
    };

    // Scroll vers le message de confirmation
    useEffect(() => {
        if (submitted && confirmationRef.current) {
        confirmationRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [submitted]);

    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                {/* <img src="" alt="" /> */}
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I"m currently available to take on new projects, so feel free</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FaEnvelope className='contact-enveloppe'></FaEnvelope>
                            <p>a.maminiaina@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FaPhone className='contact-phone'></FaPhone>
                            <p>+33 7 69 25 03 10</p>
                        </div>
                        <div className="contact-detail">
                            <FaMapMarkerAlt className='contact-location'></FaMapMarkerAlt>
                            <p>15 Avenue Arblade 92240 Malakoff</p>                        
                        </div>                                        
                    </div>
                </div>     
               
                    <form onSubmit={handleSubmit(onSubmit)} 
                        className='contact-right'
                          onChange={() => setSubmitted(false)} >
                        <div className='contact-right'>
                            <label htmlFor="">Your Name</label>
                            <input {...register('name')} placeholder='Enter your name' name='name'/>  
                            <p style={{ color: "red" }}>{errors.name?.message}</p>                  
                        </div>
                        <div className='contact-right'>
                            <label htmlFor="">Your Email</label>
                            <input {...register('email')} placeholder='Enter your Email' name='email' /> 
                            <p style={{ color: "red" }}>{errors.email?.message}</p>                   
                        </div>
                        <div className='contact-right'>
                            <label htmlFor="">Write your message here</label>
                            <textarea {...register('message')} name="message" rows="8" placeholder='Enter your message'></textarea>
                            <p style={{ color: "red" }}>{errors.message?.message}</p>
                        </div>     
                        <button type="submit" className="contact-submit" disabled={loading}>
                            {loading ? "Loading..." : "Submit now"}
                        </button>
                        
                        {submitted && <p ref={confirmationRef} className= 'fade-in' style={{ color: "green" }}>
                        {responseMessage}
                        </p>}

                    </form>
                
                
            </div>
        </div>
    )
}

export default Contact


