"use client";

import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  const { pending } = useFormStatus();
  return (
    <main className="flex flex-1 flex-col min-h-screen justify-center">
      <section className="flex flex-col lg:flex-row mt-32 mb-20 px-4 sm:px-10  h-[calc(100vh - 7.875rem)]">
        <div className="lg:pl-32 w-full lg:w-1/2 flex flex-col justify-center order-1">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-base-200 shadow-lg rounded-lg p-8 flex flex-col text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral pb-6 cursor-default">
              Contacte-nos
            </h2>
            <p className="text-xl font-medium text-neutral pb-10 cursor-default font-montserrat">
              Está pronto para impulsionar a sua empresa ou carreira? Tem alguma
              dúvida ou talvez queira apenas dizer olá? Contacte-nos:
            </p>
            <form
              action={async (formData) => {
                const { error } = await sendEmail(formData);
                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success("A sua mensagem foi enviada!");
              }}
              className="w-full flex flex-col items-stretch gap-3"
            >
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Nome"
                className="w-full border-2 rounded-md border-neutral focus:outline-none focus:border-info pl-6 font-bold text-neutral py-2 placeholder-neutral font-montserrat"
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="E-mail"
                className="w-full border-2 rounded-md border-neutral focus:outline-none focus:border-info pl-6 font-bold text-neutral py-2 placeholder-neutral font-montserrat"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Mensagem"
                className="w-full h-60 border-2 rounded-md border-neutral focus:outline-none focus:border-info pl-6 font-bold text-neutral py-2 placeholder-neutral font-montserrat"
              ></textarea>
              <button
                type="submit"
                disabled={pending}
                className="flex items-center justify-center text-info-content border-2 border-info bg-info hover:bg-transparent hover:border-info hover:text-info focus:outline-none transition transition-bg p-2 mt-10 w-full h-16 rounded-md text-xl font-bold disabled:bg-gray-200 disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed font-montserrat"
              >
                {pending ? "A enviar..." : "Enviar Mensagem"}
              </button>
            </form>
          </motion.div>
        </div>
        <div className="relative w-full lg:w-1/2 flex items-center  justify-center order-2">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full flex flex-col gap-6 p-8 h-full justify-between"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral pb-6 cursor-default">
              Outros contactos:
            </h2>
            <div className="flex flex-col items-stretch justify-evenly h-full gap-2 font-montserrat">
              <div className="flex flex-row items-center sm:justify-start gap-8 justify-between text-left ">
                <MdEmail className="fill-current w-8 h-8 min-w-8 min-h-8" />
                <h1 className="lg:text-xl font-semibold text-lg">
                  Se quiser acompanhar contactar-nos diretamente ou com uma
                  certa urgência, não exite em enviar nos um e-mail para{" "}
                  <span className="underline">geral@oceaninformatix.com</span>
                </h1>
              </div>
              <div className="flex flex-row items-center sm:justify-start gap-8 justify-between text-left ">
                <FaInstagram className="fill-current w-8 h-8 min-w-8 min-h-8" />
                <h1 className="lg:text-xl font-semibold text-lg">
                  Se quiser acompanhar o nosso dia a dia bem como conteúdos de
                  bastidores, siga-nos no{" "}
                  <span>
                    <a
                      href="https://instagram.com/oceaninformatix"
                      target="_blank"
                      className="underline hover:cursor-pointer"
                    >
                      Instagram
                    </a>
                  </span>
                  !
                </h1>
              </div>
              <div className="flex flex-row items-center sm:justify-start gap-8 justify-between text-left ">
                <FaXTwitter className="fill-current w-8 h-8 min-w-8 min-h-8" />
                <h1 className="lg:text-xl font-semibold text-lg">
                  Seja o primeiro a receber notícias, anúncios e atualizações,
                  siga-nos no{" "}
                  <span>
                    <a
                      href="https://twitter.com/oceaninformatix"
                      target="_blank"
                      className="underline hover:cursor-pointer"
                    >
                      X
                    </a>
                  </span>{" "}
                  agora!
                </h1>
              </div>
              <div className="flex flex-row items-center sm:justify-start gap-8 justify-between text-left ">
                <FaLinkedin className="fill-current w-8 h-8 min-w-8 min-h-8" />
                <h1 className="lg:text-xl font-semibold text-lg">
                  Atualizações da empresa, posts úteis e outros tópicos
                  interessantes podem ser encontrados no nosso{" "}
                  <span>
                    <a
                      href="https://www.linkedin.com/company/ocean-informatix"
                      target="_blank"
                      className="underline hover:cursor-pointer"
                    >
                      LinkedIn
                    </a>
                  </span>
                  !
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
export default ContactPage;
