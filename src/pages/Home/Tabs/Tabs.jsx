/*   import { useState } from "react";

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Car 1',
            title: 'Sport Car',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'Car 2',
            title: 'Tracks',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'Car 3',
            title: 'Mini Fire Tracks',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: 'Car 4',
            title: 'Mini Police Cars',
            content: 'Contenido de tab 4.'
        }
    ];
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (

        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === ${tab.id} && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
};
 
export default Tabs; */