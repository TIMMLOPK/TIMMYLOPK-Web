import NextLink from "next/link";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="p-8 max-w-sm bg-gray-100 rounded-lg shadow-md dark:bg-transparent dark:text-white dark:shadow-none dark:border border-gray-500">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h5>
      <p className="mb-2 font-normal text-gray-400 mt-3">{description}</p>
      <NextLink href={link}>
        <button className="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:opacity-75 dark:bg-transparent">
          View Project
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </NextLink>
    </div>
  );
};

export default ProjectCard;
