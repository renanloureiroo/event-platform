import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, useParams } from "react-router-dom";
type Lesson = {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class";
};

type LessonProps = {
  data: Lesson;
};

export const Lesson = ({ data }: LessonProps) => {

  const {slug} = useParams<{slug: string}>()

  const isLessonAvailable = isPast(data.availableAt);
  const formattedDate = format(
    data.availableAt,
    "EEE' • 'd ' de ' MMMM' • 'K'h'MM",
    {
      locale: ptBR,
    }
  );

  if(slug === data.slug){
    return(
      <Link to={`/event/lesson/${data.slug}`} className="group">
      <time className="text-gray-300">{formattedDate}</time>

      <div
        className={`rounded border bg-green-500 border-green-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${
          !isLessonAvailable && "cursor-not-allowed"
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className=" flex items-center gap-2 text-sm font-medium text-white">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className=" flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] border border-gray-100 font-bold">
            {data.lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-white mt-5 block">{data.title}</strong>
      </div>
    </Link>
    )
  }

  return (
    <Link to={`/event/lesson/${data.slug}`} className="group">
      <time className="text-gray-300">{formattedDate}</time>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${
          !isLessonAvailable && "cursor-not-allowed"
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className=" flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className=" flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] border border-green-300 font-bold">
            {data.lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{data.title}</strong>
      </div>
    </Link>
  );
};
