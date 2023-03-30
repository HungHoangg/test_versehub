import AboutMe from "../about";

function ContentContainer() {
    return (
        <div className="flex mt-8">
            <div className="bg-white p-6 rounded-2xl" style={{width: '100%'}}>
                <AboutMe/>
            </div>
        </div>
    );
}

export default ContentContainer;