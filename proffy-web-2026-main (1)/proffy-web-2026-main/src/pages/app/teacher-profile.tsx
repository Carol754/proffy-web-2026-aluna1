import { Link } from "react-router";
import goBack from "../../assets/goback-another-purple.svg";
import proffyLogo from "../../assets/proffy-logo.svg";
import attentionIcon from "../../assets/attention.svg";
import { InputCustom } from "../../components/input-custom";
import { TextArea } from "../../components/text-area";
import { Select } from "../../components/select";
import { useFieldArray, useForm } from "react-hook-form";

export function TeacherProfile() {
  const { control, register } = useForm({
    defaultValues: {
      name: "Rafael",
      surname: "Rocha",
      email: "rafael.rocha@exemplo.com",
      whatsapp: "(34) 99874-5612",
      biography: "Professor apaixonado por tecnologia e matemática.",
      subject: "Matemática",
      cost: "50,00",
      schedule: [
        { week_day: "1", from: "07:00", to: "08:00" },
      ],
    },
  });

  const { fields: scheduleItems, append, remove } = useFieldArray({
    control,
    name: "schedule",
  });

  function addNewScheduleItem() {
    append({ week_day: "", from: "", to: "" });
  }

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    alert("Perfil atualizado com sucesso!");
  }

  return (
    <div className="w-full items-center flex flex-col align-top bg-background antialiased overflow-x-hidden min-h-screen">
      {/* Header */}
      <div className="w-full flex flex-row justify-center items-center bg-dark-purple h-[64px]">
        <header className="flex w-full justify-between items-center max-w-7xl px-4">
          <Link to="/give-classes/register-completed">
            <img src={goBack} alt="Voltar" className="w-8 h-12" />
          </Link>
          <h1 className="text-text-purple-base font-archivo-semibold text-base">Meu perfil</h1>
          <img src={proffyLogo} alt="Proffy" className="w-12 h-4" />
        </header>
      </div>

      {/* Profile Header Background */}
      <div className="w-full flex flex-col items-center bg-purple h-[352px] relative">
        <div className="flex flex-col items-center absolute -bottom-16">
          <div className="relative">
            <img
              className="w-[120px] h-[120px] rounded-full object-cover border-4 border-white shadow-md"
              src="https://avatars.githubusercontent.com/u/15871684?v=4"
              alt="Rafael Rocha"
            />
            <label className="absolute bottom-0 right-0 bg-green hover:bg-green-dark w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-md transition">
              <input type="file" className="hidden" />
              <span className="text-white text-xl">📷</span>
            </label>
          </div>
          <strong className="font-archivo-bold text-2xl text-white mt-4">
            Rafael Rocha
          </strong>
          <span className="font-poppins-regular text-sm text-text-purple-base mt-1">
            Matemática
          </span>
        </div>
      </div>

      {/* Main Form Card */}
      <main className="flex flex-col w-full max-w-4xl justify-center bg-white border border-gray-lines-in-white rounded-lg mt-[6rem] overflow-hidden pt-16 mb-16 shadow-sm">
        <form onSubmit={handleSaveProfile}>
          {/* Seus Dados */}
          <fieldset className="flex flex-col items-center mx-16">
            <legend className="flex w-full items-center justify-between pb-10 mb-10 font-archivo-semibold text-2xl text-text-title border-b border-gray-lines-in-white">
              Seus dados
            </legend>
            <div className="grid grid-cols-2 w-full gap-8 mb-8">
              <InputCustom
                name="name"
                label="Nome"
                labelColor="text-text-complement"
                bgColor="bg-white-shape"
                {...register("name")}
              />
              <InputCustom
                name="surname"
                label="Sobrenome"
                labelColor="text-text-complement"
                bgColor="bg-white-shape"
                {...register("surname")}
              />
            </div>
            <div className="grid grid-cols-2 w-full gap-8 mb-8">
              <InputCustom
                name="email"
                label="E-mail"
                labelColor="text-text-complement"
                bgColor="bg-white-shape"
                {...register("email")}
              />
              <InputCustom
                name="whatsapp"
                label="Whatsapp"
                labelColor="text-text-complement"
                bgColor="bg-white-shape"
                {...register("whatsapp")}
              />
            </div>
            <div className="flex flex-col w-full max-w-full">
              <TextArea
                name="biography"
                label="Biografia"
                labelColor="text-text-complement"
                bgColor="bg-white-shape"
                maxLength={300}
                spanLabel="(Máximo 300 caracteres)"
                {...register("biography")}
              />
            </div>
          </fieldset>

          {/* Sobre a aula */}
          <fieldset className="flex flex-col items-center justify-between mx-16 mt-16">
            <legend className="flex w-full items-center justify-between pb-6 font-archivo-semibold text-2xl text-text-title border-b border-gray-lines-in-white">
              Sobre a aula
            </legend>
            <div className="grid grid-cols-5 w-full gap-8">
              <div className="flex flex-col w-full mt-8 col-span-3">
                <Select
                  name="subject"
                  label="Matéria"
                  labelColor="text-text-complement"
                  bgColor="bg-white-shape"
                  optionDefault="Selecione qual você quer ensinar"
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
                  {...register("subject")}
                />
              </div>

              <div className="flex flex-col w-full mt-8 col-span-2">
                <InputCustom
                  name="cost"
                  label="Custo da sua hora por aula"
                  labelColor="text-text-complement"
                  bgColor="bg-white-shape"
                  placeholder="R$"
                  {...register("cost")}
                />
              </div>
            </div>
          </fieldset>

          {/* Horários disponíveis */}
          <fieldset className="flex flex-col items-center justify-between mx-16 mt-16">
            <legend className="flex w-full items-center justify-between pb-6 font-archivo-semibold text-2xl text-text-title border-b border-gray-lines-in-white">
              Horários disponíveis
              <button
                type="button"
                className="text-base text-purple cursor-pointer hover:text-dark-purple transition font-archivo-semibold"
                onClick={addNewScheduleItem}
              >
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.id} className="w-full">
                <div className="grid grid-cols-4 w-full gap-8 mb-4">
                  <div className="flex flex-col mt-8 col-span-2">
                    <Select
                      name={`schedule.${index}.week_day`}
                      label="Dia da semana"
                      labelColor="text-text-complement"
                      bgColor="bg-white-shape"
                      optionDefault="Selecione o dia"
                      options={[
                        { value: "0", label: "Domingo" },
                        { value: "1", label: "Segunda" },
                        { value: "2", label: "Terça" },
                        { value: "3", label: "Quarta" },
                        { value: "4", label: "Quinta" },
                        { value: "5", label: "Sexta" },
                        { value: "6", label: "Sábado" },
                      ]}
                      {...register(`schedule.${index}.week_day`)}
                    />
                  </div>

                  <div className="flex flex-col w-full mt-8 col-span-1">
                    <InputCustom
                      name={`schedule.${index}.from`}
                      label="Das"
                      labelColor="text-text-complement"
                      bgColor="bg-white-shape"
                      type="time"
                      {...register(`schedule.${index}.from`)}
                    />
                  </div>

                  <div className="flex flex-col w-full mt-8 col-span-1">
                    <InputCustom
                      name={`schedule.${index}.to`}
                      label="Até"
                      labelColor="text-text-complement"
                      bgColor="bg-white-shape"
                      type="time"
                      {...register(`schedule.${index}.to`)}
                    />
                  </div>
                </div>

                <div className="flex items-center w-full gap-8 pb-8">
                  {index === 0 ? (
                    <span className="w-full border-t border-gray-lines-in-white" />
                  ) : (
                    <>
                      <span className="flex-1 border-t border-gray-lines-in-white" />
                      <button
                        type="button"
                        className="font-archivo-semibold text-base text-red-500 cursor-pointer hover:text-red-600 transition"
                        onClick={() => remove(index)}
                      >
                        Excluir horário
                      </button>
                      <span className="flex-1 border-t border-gray-lines-in-white" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </fieldset>

          {/* Rodapé / Botão Salvar */}
          <div className="flex w-full px-16 mt-10 bg-white-shape items-center justify-between py-8 border-t border-gray-lines-in-white">
            <div className="flex gap-4 items-center">
              <img src={attentionIcon} alt="Aviso importante" className="w-8 h-8" />
              <p className="font-poppins-regular text-xs text-purple items-center">
                Importante!<br />
                <span className="font-poppins-regular text-xs text-text-complement">
                  Preencha todos os dados corretamente.
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="flex gap-4 items-center bg-green hover:bg-green-dark cursor-pointer transition py-4 px-10 rounded-lg font-archivo-semibold text-base text-white"
            >
              Salvar cadastro
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}