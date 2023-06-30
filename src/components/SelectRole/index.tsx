export default function SelectRole({setScreen}: {setScreen: React.Dispatch<React.SetStateAction<string>>}){
    return(
    <section className="w-full h-1/2 mx-10 flex justify-between gap-20">
        <div
            onClick={() => setScreen('graduacao')}
            className="hover:drop-shadow-2xl drop-shadow cursor-pointer w-2/5 bg-white border-2 border-gray-300 flex justify-center items-center flex-col"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px"><path d="M560-574v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-610q-38 0-73 9.5T560-574Zm0 220v-49q33-13.5 67.5-20.25T700-430q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-390q-38 0-73 9t-67 27Zm0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-500q-38 0-73 9.5T560-464ZM248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z"/></svg>
                <p className="text-3xl">Graduação</p>
        </div>
        <div 
            onClick={() => setScreen('pos_graduacao')}
            className="hover:drop-shadow-2xl drop-shadow cursor-pointer w-2/5 bg-white border-2 border-gray-300 flex justify-center items-center flex-col"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px"><path d="M248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z"/></svg>
                <p className="text-3xl">Pós Graduação</p>
        </div>
        <div 
            onClick={() => setScreen('semi_presencial')}
            className="hover:drop-shadow-2xl drop-shadow cursor-pointer w-2/5 bg-white border-2 border-gray-300 flex justify-center items-center flex-col"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px"><path d="M480-160q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740v506q51-33 107-49.5T700-300q36 0 78.5 7t81.5 29v-505q9.886 3.75 19.443 7.875Q889-757 898-752q10 6 16 15.677 6 9.678 6 20.323v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm60-167v-353l260-260v387L540-327Zm-120 63v-439q-34-19-79-28t-81-9q-47 0-87.5 10T100-704.467V-264q35-17 75.5-26.5t85-9.5q44.5 0 84.5 9.5t75 26.5Zm0 0v-439 439Z"/></svg>
                <p className="text-3xl">Semi Presencial</p>
        </div>
    </section>
    );
}