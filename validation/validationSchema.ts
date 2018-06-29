export default interface IValidationSchema{
    field:string,
    method:string,
    validWhen:string,
    message:string,
    args:string[]
};
