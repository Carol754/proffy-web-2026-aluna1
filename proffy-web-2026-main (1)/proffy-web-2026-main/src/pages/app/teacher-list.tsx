import { Link } from "react-router";
import goBack from "../../assets/goback-another-purple.svg";
import proffyLogo from "../../assets/proffy-logo.svg";
import { Select } from "../../components/select";
import { InputCustom } from "../../components/input-custom";

export function TeacherList() {
  return (
    <div className="w-full items-center flex flex-col align-top bg-background antialiased min-h-screen">
      <div className="w-full flex flex-row justify-center items-center bg-dark-purple h-[64px]">
        <header className="flex w-full justify-between items-center max-w-7xl px-4">
          <Link to="/">
            <img src={goBack} alt="Voltar" className="w-8 h-12" />
          </Link>
          <h1 className="text-text-purple-base font-archivo-semibold text-base">Estudar</h1>
          <img src={proffyLogo} alt="Proffy" className="w-12 h-4" />
        </header>
      </div>

      <div className="w-full flex flex-col items-center bg-purple pb-16">
        <div className="flex w-full justify-between items-center max-w-4xl mt-[32px] px-4">
          <h1 className="font-archivo-bold text-3xl text-white">
            Estes são os<br />proffys disponíveis.
          </h1>
        </div>

        <form className="grid grid-cols-3 gap-4 w-full max-w-4xl mt-8 px-4">
          <Select
            name="subject"
            label="Matéria"
            labelColor="text-text-purple-base"
            bgColor="bg-white"
            optionDefault="Selecione a matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação física", label: "Educação física" },
              { value: "Fisica", label: "Fisica" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            labelColor="text-text-purple-base"
            bgColor="bg-white"
            optionDefault="Selecione o dia"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <InputCustom
            name="time"
            label="Hora"
            labelColor="text-text-purple-base"
            bgColor="bg-white"
            type="time"
          />
        </form>
      </div>

      <main className="flex flex-col w-full max-w-4xl justify-center my-8 px-4">
        <p className="text-center text-text-complement font-poppins-regular my-8">
          Nenhum professor encontrado com a sua pesquisa.
        </p>
      </main>
    </div>
  );
}