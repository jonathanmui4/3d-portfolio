import React, { useReducer } from "react";
import { contactFormReducer, initialState } from "./ContactFormReducer";
import Section from "./Section";

const ContactSection = () => {
    const [state, dispatch] = useReducer(contactFormReducer, initialState);

    function onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        const name = state.name;
        const email = state.email;
        const message = state.message;

        fetch("https://formcarry.com/s/HTmKJ2sI0Gu", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.code === 200) {
                    alert("We received your submission, thank you!");
                    dispatch({ type: "CHANGE_SUCCEEDED", payload: true });
                    // setName("");
                    // setEmail("");
                    // setMessage("");
                } else if (response.code === 422) {
                    // Field validation failed
                    dispatch({ type: "SET_ERROR", payload: response.message });
                } else {
                    // other error from formcarry
                    dispatch({ type: "SET_ERROR", payload: response.message });
                }
            })
            .catch((error) => {
                // request related error.
                dispatch({
                    type: "SET_ERROR",
                    payload: error.message ? error.message : error,
                });
                // setError(error.message ? error.message : error);
            });
    }

    return (
        <Section idName={"Contact"}>
            <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white bg-opacity-70 w-96 max-w-full">
                {state.succeeded ? (
                    <p className="text-green-500 text-center">
                        Thanks for your message !
                    </p>
                ) : (
                    <form onSubmit={(e) => onSubmit(e)}>
                        <label
                            htmlFor="name"
                            className="font-medium text-gray-900 block mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={state.name}
                            onChange={(e) =>
                                dispatch({
                                    type: "EDIT_NAME",
                                    payload: e.target.value,
                                })
                            }
                            placeholder="Your first and last name"
                            className="block w-full rounded-md border-0 bg-gray-400 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <label
                            htmlFor="email"
                            className="font-medium text-gray-900 block mb-1 mt-8"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={state.email}
                            onChange={(e) =>
                                dispatch({
                                    type: "EDIT_EMAIL",
                                    payload: e.target.value,
                                })
                            }
                            placeholder="john@doe.com"
                            className="block w-full rounded-md border-0 bg-gray-400 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <label
                            htmlFor="message"
                            className="font-medium text-gray-900 block mb-1 mt-8"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={state.message}
                            onChange={(e) =>
                                dispatch({
                                    type: "EDIT_MESSAGE",
                                    payload: e.target.value,
                                })
                            }
                            placeholder="Enter your message..."
                            id="message"
                            className="h-32 block w-full rounded-md border-0 bg-gray-400 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <div className="mt-1 text-red-500">{state.error}</div>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </Section>
    );
};

export default ContactSection;
