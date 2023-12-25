// "use server"
// import Header from "@/components/header";
// import Footer from "@/components/footer";
import Layout from "../../components/Layout";
import { TOKEN, DATABASE_ID } from "../../../config";
import { ProjectItem } from "../../components/projects/project-item";
import Image from "next/legacy/image";

export default async function Projects() {
    // 빌드 타임에 호출->화면에 렌더링 getStaticProps함수 지원이 안되어 변경부분
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending",
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

    const projects = await res.json();
    // console.log(projects);

    console.log(`projectsNames : ${projects.results[0].id}`);
    // console.log(`projectsNames : ${aProjects.id}`);

    /* const title = projects.results.map(aProjects => {
         return aProjects.properties.Name.title[0].plain_text;
      })  //=>전체 배열을 반환
    */
    /* 배열요소 중에 첫번째 요소 받기  
     const imsi=projects.results[0].properties.Name.title[0].plain_text;
    */

    //사용법 const double = array.map(element=>(element*2))

    return (
        <>
            <Layout>
                <h1>total projects : {projects.results.length}</h1>

                {projects.results.map((aProjects) => (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:w-full">

                        <div key={aProjects.id} className="flex flex-col m-3 bg-slate-600 rounded-xl">
                            <div>
                                <Image
                                    className="rounded-t-xl"
                                    src={(aProjects.cover.file?.url || aProjects.cover.external.url)}
                                    alt="cover image"
                                    width="100%"
                                    height="60%"
                                    layout="responsive"
                                    objectFit="none"
                                    quality={100}
                                />
                            </div>

                            <h1>{aProjects.properties.Name.title[0].plain_text}</h1>
                            <h3>{aProjects.properties.Description.rich_text[0].plain_text}</h3>
                            <a href={aProjects.properties.Github.url}>깃허브 바로가기</a>
                            <a href={aProjects.properties.Youtube.url}>YouTube 바로가기</a>
                        </div>

                    </div>
                ))}


            </Layout>

        </>
    )
}


function projectItem(projectsNames, aProjects) {
    return <li key={projectsNames}>
        {aProjects.properties.Name.title[0].plain_text}
    </li>;
}


