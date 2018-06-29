 export default class Validateions{
  static isFieldEmpty=(value:string):boolean=>{
        return value.trim().length==0?true:false
    };

    static matchName=(value:string):boolean=>{
        let regx=new RegExp('[a-zA-Z]+$');
        return regx.test(value);
    }

    static matchMobile=(value:string):boolean=>{
        let regx=new RegExp('((^[6-9]{1}[0-9]{9}$)|(^0[6-9]{1}[0-9]{8}$))');
        return regx.test(value);
    }

    static matchEmail=(value:string):boolean=>{
        let regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regx.test(value);
    }
    static matchPassword=(value:string):boolean=>{
        let regx=/^[a-zA-Z0-9]{8,}$/;
        console.log(regx.test(value));
        return regx.test(value);
    }

    static comparePassowrd=(pass1:string,state:any):boolean=>{
        return pass1==state.password;
    }

}