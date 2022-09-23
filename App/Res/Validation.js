const validation = {
    email: () => /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w\w+)+$/,
    password: () => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
    phone: () => /^[0-9]+$/,
    text: ()=> /^[a-zA-Z]*$/,
  };

  
  export default validation;