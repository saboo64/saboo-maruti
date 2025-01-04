import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Header from "../../components/header/Header";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { Helmet } from "react-helmet";

function Finance() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // const [method, setMethod] = useState();
  const [model, setModel] = useState("");
  const [purchaseTime, setPurchaseTime] = useState("");
  const [formLoanAmount, setFormLoanAmount] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [loading, setLoading] = useState(false);

  // adding date
  var result = "";
  var d = new Date();
  result += d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  const checkFormValidity = () => {
    return (
      name.trim() !== "" &&
      phone.length === 10 &&
      model !== "" && // Ensure a model is selected
      !loading
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // try {
    //   await axios
    //     .post('https://saboogroups.com/admin/api/arena-finance', {
    //       name: name,
    //       phone: phone,
    //       email: email,
    //       comments: message,
    //       model: model,

    //       purchase_time: purchaseTime,
    //       loan_amount: formLoanAmount,
    //       loan_duration: loanDuration,
    //     })
    //     .then((res) => {
    //       toast.success('Enquiry sent successfully');
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       toast.error('Something went wrong!');
    //       console.log(err);
    //     });
    // } catch (error) {
    //   // toast.error("Something went wrong!");
    //   setLoading(false);
    // }

    try {
      await axios
        .post(
          "https://arena-backend-git-main-arenas-projects.vercel.app/finance",
          {
            name: name,
            phone: phone,
            email: email,
            comments: message,
            model: model,

            purchase_time: purchaseTime,
            loan_amount: formLoanAmount,
            loan_duration: loanDuration,
          }
        )
        .then((res) => {
          toast.success("Enquiry sent successfully");
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong!");
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    
    // Second API call
    await axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
   Our Sales consultant will contact you shortly.
   
   Regards
   RKS Motor Pvt. Ltd.
   98488 98488
   www.saboomaruti.in
   www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log("SMS API Response:", res.data);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error sending SMS:", err);
        setSubmitted(true);
        setLoading(false);
      });
  };

 if (window.gtag) {
   window.gtag("event", "Finance enquiry", {
     "phone number": `+91${phone}`,
     email: email,
     comments: message,
     model: `${model}`,
     name: `${name}`,
   });
 }  

  useEffect(() => {
    if (submitted) {
      document.getElementById("arenaCarEnq2").submit();
    }
  }, [submitted]);

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  // const [showToast, setShowToast] = useState(false);

  // const pattern = useMemo(() => {
  //   return /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  // }, []);

  // useEffect(() => {
  //   if (
  //     phone !== '' &&
  //     phone.length === 10 &&
  //     !pattern.test(phone) &&
  //     !loading
  //   ) {
  //     if (!showToast) {
  //       toast.error('Enter a valid phone number', {
  //         theme: 'colored',
  //       });
  //       setShowToast(true);
  //     }
  //   } else {
  //     setShowToast(false);
  //   }
  // }, [phone, pattern, loading, showToast]);

  // function handleSubmit() {
  //   setLoading(true);
  //   axios
  //     .post('https://saboogroups.com/admin/api/arena-finance', {
  //       name: name,
  //       phone: phone,
  //       email: email,
  //       outlet: outlet,
  //       comments: comments,
  //       model: model,
  //       purchase_time: purchaseTime,
  //       loan_amount: formLoanAmount,
  //       loan_duration: loanDuration,
  //     })
  //     .then((res) => {
  //       setMethod('POST');
  //       toast.success('Enquiry sent successfully');
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       toast.error('Something went wrong!');
  //       console.log(err);
  //     });

  //   // Second API call
  //   axios
  //     .get(
  //       `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
  //     Our Sales consultant will contact you shortly.

  //     Regards
  //     RKS Motor Pvt. Ltd.
  //     98488 98488
  //     www.saboomaruti.in
  //     www.saboonexa.in&type=1&template_id=1407168967467983613`
  //     )
  //     .then((res) => {
  //       console.log('SMS API Response:', res.data);
  //       // Handle the response from the SMS API if needed
  //     })
  //     .catch((err) => {
  //       console.error('Error sending SMS:', err);
  //       // Handle errors from the SMS API if needed
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  // function handleSubmit2() {
  //   setLoading(true);
  //   // First API call
  //   axios
  //     .post('https://arena-backend-git-main-arenas-projects.vercel.app/finance', {
  //       name: name,
  //       phone: phone,
  //       email: email,
  //       outlet: outlet,
  //       comments: comments,
  //       model: model,
  //       purchase_time: purchaseTime,
  //       loan_amount: formLoanAmount,
  //       loan_duration: loanDuration,
  //     })
  //     .then((res) => {
  //       setMethod('POST');
  //       toast.success('Enquiry sent successfully');
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       toast.error('Something went wrong!');
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  function calculateEMI() {
    const principal = parseFloat(loanAmount);
    const calculateInterest = parseFloat(interestRate) / 100 / 12;
    const calculatePayments = parseFloat(loanTerm) * 12;

    //calculate the monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = parseFloat(monthly).toFixed(2);

    //calculate interest
    const totalInterest = (monthly * calculatePayments - principal).toFixed(2);
    const totalPayment = (monthly * calculatePayments).toFixed(2);

    document.getElementById("month").innerHTML = parseFloat(monthlyPayment);
    document.getElementById("interest").innerHTML = totalInterest;
    document.getElementById("total").innerHTML = totalPayment;
  }

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Car loans, Finance in Secunderabad & Hyderabad | Saboo Maruti
        </title>
        <meta
          name="title"
          content="Maruti Car loans, Finance in Secunderabad & Hyderabad | Saboo Maruti"
        />
        <meta
          name="description"
          content="Get best car finance deals on Maruti cars. Saboo Maruti offers car loans with low down payment, low interest & low cost EMI. For more info call now 98488 98488."
        />
        <meta
          name="keywords"
          content="maruti car loans, finance in, saboomaruti in car, suzuki secunderabad services"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboomaruti.in/maruti-suzuki-car-finance-services"
        />
        <meta
          property="og:title"
          content="Maruti Suzuki Car Finance | Lowest EMI Options  | Saboo Maruti"
        />
        <meta
          property="og:description"
          content="Maruti Suzuki Finance service offer car loans with features like low down payment, low interest rates. For more info call us 9848898488."
        />
        <meta property="og:image" content="img/og-tags/finance.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.com/saboorksmaruti" />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Car Finance | Lowest EMI Options  | Saboo Maruti"
        />
        <meta
          property="twitter:description"
          content="Maruti Suzuki Finance service offer car loans with features like low down payment, low interest rates. For more info call us 9848898488."
        />
        <meta property="twitter:image" content="img/og-tags/finance.webp" />
      </Helmet>
      <img
        src={require("../../assets/banners/Saboo-Maruti-Suzuki-Finance-Banner.b458befc73e9d9d51ea6.webp")}
        className="w-full max-w-full lg:mt-16"
        alt="finance banner"
        id="finance"
      />
      <div className="container px-5 py-16 mx-auto">
        <p className="text-2xl font-semibold text-red-500">Maruti Finance</p>
        <p>
          Maruti has tied up with all major nationalised banks, private banks,
          multinational banks to offer the best rates of interest and
          installment schemes are designed to suit your convenience and other
          requirements.
        </p>
        <h5 className="mt-2 font-bold">Value Added Services</h5>
        <p>
          Extended warranty: Maruti Finance gives you the privilege of extended
          warranty that goes up to four years! This means four years of
          hassle-free maintenance. You can get up to 30% discount on extended
          warranty under Maruti Finance.
        </p>
        <h5 className="mt-2 font-bold">Loans for Insurance and Accessories</h5>
        <p>
          Loans for insurance and accessories are built into the EMI's, keeping
          the whole deal simple and hassle free. So if you haven't already made
          up your mind, just walk into any of our showrooms for the best cars
          and best finance options.
        </p>
        <div className="grid gap-4 px-5 mt-5 md:grid-cols-2">
          {/* new grid column opens */}
          <form
            id="arenaCarEnq2"
            action={
              pattern.test(phone) && phone.length === 10
                ? "https://crm.zoho.in/crm/WebToLeadForm"
                : "#"
            }
            name="WebToLeads54158000083979838"
            method={"POST"}
            acceptCharset="UTF-8"
          >
            <input
              type="text"
              style={{ display: "none" }}
              name="xnQsjsdp"
              value="c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529"
            />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input
              type="text"
              style={{ display: "none" }}
              name="xmIwtLD"
              value="adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4"
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="actionType"
              value="TGVhZHM="
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="returnURL"
              value="https://www.saboomaruti.in/thank-you-for-contact-us"
            />
            <div className="space-y-4">
              <p className="font-bold uppercase text-md">my car details :</p>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name<span className="text-red-600 sub">*</span>
                  </label>
                  <input
                    className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="hidden">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
                    type="text"
                    required
                    id="LEADCF83"
                    name="LEADCF83"
                    value={result}
                  />
                  {phone.length > 0 && phone.length < 10 ? (
                    <small className="text-red-500">
                      Phone number must be 10 digits
                    </small>
                  ) : !pattern.test(phone) && phone.length === 10 ? (
                    <small className="text-red-500">
                      Phone number is invalid
                    </small>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone<span className="text-red-600 sub">*</span>
                  </label>
                  <input
                    className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    id="Phone"
                    name="Phone"
                    value={phone}
                    maxLength="10"
                    required
                    minLength="10"
                    onChange={(e) =>
                      setPhone(
                        e.target.value.replace(/[^1-9 ]/g, "") &&
                          e.target.value.replace(/ /g, "")
                      )
                    }
                  />
                  {phone.length > 0 && phone.length < 10 ? (
                    <small className="text-red-500">
                      Phone number must be 10 digits
                    </small>
                  ) : !pattern.test(phone) && phone.length === 10 ? (
                    <small className="text-red-500">
                      Phone number is invalid
                    </small>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  id="Email"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Comments
                </label>
                <textarea
                  className="w-full h-20 px-1 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* check here later */}

              <div>
                <p className="font-bold uppercase text-md">
                  share loan requirements :
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Model<span className="text-red-600 sub">*</span>
                    </label>
                    <select
                      id="LEADCF6"
                      name="LEADCF6"
                      onChange={(e) => {
                        const selectedValue = e.target.value;

                        // Check if the selected option is not "Select Model"
                        if (selectedValue !== "Select Model") {
                          // Perform the backend call or set the model state here
                          setModel(selectedValue);
                        }
                      }}
                      defaultValue="Select Model"
                      className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option disabled>Select Model</option>
                      <optgroup label="Hatchback">
                        <option value="Alto K10">Alto K10</option>
                        <option value="Alto 800">Alto</option>
                        <option value="Wagon R">Wagon R</option>
                        <option value="Celerio">Celerio</option>
                        <option value="Swift">Swift</option>
                      </optgroup>

                      <optgroup label="Sedan">
                        <option value="Dzire">Dzire</option>
                      </optgroup>

                      <optgroup label="micro SUV">
                        <option value="S-Presso">S-Presso</option>
                      </optgroup>
                      <optgroup label="MPV">
                        <option value="Ertiga">Ertiga</option>
                      </optgroup>
                      <optgroup label="SUV">
                        <option value="Brezza">Brezza</option>
                      </optgroup>
                      <optgroup label="Mini Van">
                        <option value="Eeco">Eeco</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Purchase Time
                    </label>
                    <select
                      onChange={(e) => setPurchaseTime(e.target.value)}
                      name="car_purchase_time"
                      className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option>Select Purchase Time</option>
                      <option>Immediate</option>
                      <option>2 Weeks</option>
                      <option>3 Weeks</option>
                      <option>4 Weeks</option>
                      <option>4-6 Weeks</option>
                      <option>6+ Weeks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Loan Amount
                    </label>
                    <input
                      className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                      type="text"
                      // id='Company'
                      // name='Company'
                      onChange={(e) => setFormLoanAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Loan Duration
                    </label>
                    <input
                      className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                      type="text"
                      onChange={(e) => setLoanDuration(e.target.value)}
                      name="car_loan_duration_years"
                    />
                  </div>
                </div>
              </div>

              {/* <p className='text-gray-700'>
                <span className='font-bold text-black'>Disclaimer</span>: I
                agree that by clicking the ‘Submit’ button below, I am
                explicitly soliciting a call/Message from Saboo Maruti (RKS
                Motor Pvt. Ltd) or its Representatives on my ‘Mobile’.
              </p>
              <div className='flex items-start'>
                <input
                  id='disclaimer'
                  name='disclaimer'
                  type='checkbox'
                  className='w-4 h-4 rounded'
                />
                <div className='ml-2 text-sm'>
                  <label
                    htmlFor='disclaimer'
                    className='font-medium text-gray-700'
                  >
                    Please Agree with following Disclaimer
                  </label>
                </div>
              </div> */}
              <button
                className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
                  !checkFormValidity()
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                }`}
                type="submit"
                disabled={
                  !checkFormValidity() ||
                  phone.length !== 10 ||
                  !pattern.test(phone) ||
                  loading
                }
                onClick={handleSubmit}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
                    Loading
                  </div>
                ) : (
                  "SUBMIT"
                )}
              </button>
              <div className="flex items-start py-1 ">
                <div className="ml-2 text-sm">
                  <label
                    htmlFor="disclaimer"
                    className="font-medium text-gray-700"
                  >
                    <span className="font-bold text-black">Disclaimer</span>
                    <span className="text-black">
                      : By clicking 'SUBMIT', you have agreed to our
                    </span>
                    <a
                      href="/maruti-car-terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 text-sm text-red-600 "
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </form>

          {/* new grid column opens */}
          <div>
            <p className="text-2xl font-bold mb-7">EMI Calculator</p>
            <div className="flex items-center justify-between mt-2">
              <p>Curreny :</p>
              <select
                name="currency"
                className="block py-2 w-full max-w-[75%] px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option disabled>Select Curreny</option>
                <option defaultValue>₹ INR</option>
              </select>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="">Loan Amount :</div>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-blue-500 focus:border-blue-500"
                type="text"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <p>Interest Rate (%) :</p>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-blue-500 focus:border-blue-500"
                type="text"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <p>Years :</p>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-blue-500 focus:border-blue-500"
                type="text"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-3">
              <button
                className="bg-blue-800 rounded-full flex items-center text-white px-4 py-1.5"
                type="submit"
                onClick={calculateEMI}
              >
                Submit
              </button>
            </div>

            {/* <div className='mt-8 space-y-3 text-center'>
              <div>
                <p className='font-semibold'>Loan EMI</p>
                <p id='month' className='text-red-600'></p>
              </div>
              <div>
                <p className='font-semibold'>
                  Total Interest Payable{' '}
                  <span className='font-light'>(INR)</span>
                </p>
                <p id='interest' className='text-red-600'></p>
              </div>
              <div>
                <p className='font-semibold'>
                  Total Payment{' '}
                  <span className='font-light'>
                    (Principal + Interest) (INR)
                  </span>
                </p>
                <p id='total' className='text-red-600'></p>
              </div>
            </div> */}

            <div className="container mx-auto">
              <div className="mt-8 text-center">
                <table className="mx-auto border-collapse">
                  <tbody>
                    <tr>
                      <th className="px-6 py-3 ">
                        <p className="font-semibold">Loan EMI</p>
                      </th>
                      <td className="px-6 py-3 ">
                        <p id="month" className="text-red-600"></p>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-3 ">
                        <p className="font-semibold">Total Interest Payable</p>
                        <p className="font-light">(INR)</p>
                      </th>
                      <td className="px-6 py-3 ">
                        <p id="interest" className="text-red-600"></p>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-3 ">
                        <p className="font-semibold">Total Payment</p>
                        <p className="font-light">
                          (Principal + Interest) (INR)
                        </p>
                      </th>
                      <td className="px-6 py-3 ">
                        <p id="total" className="text-red-600"></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finance;
