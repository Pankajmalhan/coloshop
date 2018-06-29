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
      field: 'firstName', 
      method: 'isFieldEmpty', 
      validWhen: false, 
      message: 'FirstName is required.'
    },
    { 
        field: 'firstName', 
        method: 'matchName', 
        validWhen: true, 
        message: 'FirstName is not valid.'
    },
    { 
        field: 'lastName', 
        method: 'isFieldEmpty', 
        validWhen: false, 
        message: 'LastName is required.'
    },
    { 
          field: 'lastName', 
          method: 'matchName', 
          validWhen: true, 
          message: 'LastName is not valid.'
    },
    { 
        field: 'mobileNo', 
        method: 'isFieldEmpty', 
        validWhen: false, 
        message: 'Pleave provide a mobile number.'
      },
      {
        field: 'mobileNo', 
        method: 'matchMobile',
        validWhen: true, 
        message: 'This is not a valid mobile number.'
      },
      { 
        field: 'password', 
        method: 'matchPassword', 
        validWhen: true, 
        message: 'Password is not valid.'
      },
      { 
        field: 'repeatpassword', 
        method: 'comparePassowrd', 
        validWhen: true, 
        message: 'Repeat password is not valid.'
      }
  ];
