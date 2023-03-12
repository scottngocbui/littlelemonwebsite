import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    if (data.occasion = 'birthday') {
        setResponse({
            message: `Thanks for your submission ${data.firstName}, we look forward to celebrating your Birthday!`,
          })
    }
    }

    setLoading(false);

    return { isLoading, response, submit };
  };

export default useSubmit;
