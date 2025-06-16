import { useState} from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
}
const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldForm = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        setSubmittedData(values)
        console.log(values);
        setValues(initialValues);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setValues(
            (prev) => ({ ...prev, [name]: value }),
        )
    };

    const handleClear = () => {
        setValues(initialValues);
        setSubmittedData(null);
    };

    return (
        <>
        <div>
          <form onSubmit={handleSubmit} className=" mx-auto max-w-sm text-center mt-8 space-y-4">
              <input
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="px-4 py-2 rounded border"
                  required
              />
              <input
                name="email"
                type="email"
                value={values.email}
                className="px-4 py-2 rounded border"
                placeholder="Email"
                onChange={handleChange}
                required
              >
              </input>
              <textarea
                  name="message"
                  value={values.message}
                  className="px-4 py-2 rounded border"
                  placeholder="Type your message"
                  onChange={handleChange}
                  required
              >
              </textarea>
              <div className="flex gap-4">
                  <button
                      className="bg-cf-dark-red text-white px-4 py-2 rounded"
                      type="submit"
                     >
                      Submit
                  </button>
                  <button
                      className="bg-gray-200 text-cf-dark-gray px-4 py-2 rounded"
                       type="button"
                      onClick={handleClear}
                  >
                      Clear
                  </button>
              </div>


              { submittedData && (
              <div className="mt-6 border-t pt-4 space-y-2">
                  <h2>Submitted Data</h2>
                  <p><strong>Name:</strong> {submittedData.name}</p>
                  <p><strong>Email:</strong> {submittedData.email}</p>
                  <p><strong>Message:</strong> {submittedData.message}</p>
              </div>
              )}

          </form>
        </div>
        </>
    )
}
export default MultiFieldForm;