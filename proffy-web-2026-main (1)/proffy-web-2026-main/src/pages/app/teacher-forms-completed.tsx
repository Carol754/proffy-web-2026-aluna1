import { Link } from "react-router";
import successCheckIcon from "../../assets/done.svg";

export function TeacherFormsCompleted() {
  return (
    <div className="w-full min-h-screen bg-purple flex flex-col items-center justify-center bg-shapes bg-no-repeat bg-center">
      <div className="flex flex-col items-center text-center max-w-lg px-4">
        <img src={successCheckIcon} alt="Cadastro salvo" className="w-24 h-24 mb-10" />
        
        <h1 className="font-archivo-bold text-5xl text-white mb-6">
          Cadastro salvo!
        </h1>
        
        <p className="font-poppins-regular text-base text-text-purple-base mb-10 leading-relaxed">
          Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.
        </p>

        <Link
            to="/profile"
            className="bg-green hover:bg-green-dark transition-colors py-4 px-10 rounded-lg font-archivo-semibold text-base text-white text-center"
        >
            Acessar lista
        </Link>
      </div>
    </div>
  );
}