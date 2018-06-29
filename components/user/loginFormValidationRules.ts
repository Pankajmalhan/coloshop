export var validationArray=[
    { 
      field: 'email', 
      method: 'isFieldEmpty', 
      validWhen: false, 
      message: 'Email is required.' 
    },
    { 
      field: 'email',
      method: 'matchEmail', 
      validWhen: true, 
      message: 'That is not a valid email.'
    },
      { 
        field: 'password', 
        method: 'matchPassword', 
        validWhen: true, 
        message: 'Password is not valid.'
      }
  ];
