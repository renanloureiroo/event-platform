import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { ButtonLink } from "./ButtonLink";

import "@vime/core/themes/default.css";

export const Video = () => {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-x-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="RmcQ5NxB5Gs" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <section className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do Ignite Lab
            </h1>

            <p className="mt-4 text-gray-200">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://github.com/renanloureiroo.png"
                alt="Avatar"
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Renan Loureiro
                </strong>
                <span className="text-gray-200 text-sm block">
                  Frontend Developer
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <ButtonLink href="#">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </ButtonLink>

            <ButtonLink variant="secondary" href="#">
              <Lightning size={24} />
              Acesse o desafio
            </ButtonLink>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>

              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>

              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
