import '../css/page2.css'

function DevTitle({DevStatus}){
    return(
        <div className="dev_whole">
            {/* <div className="dev_article"
            style={{display: DevStatus ?'none' :'block'}}> */}
            <div className={DevStatus ? "dev_article_none" : "dev_article" }>
            <div className="dev_nav">
            <button className="JobGroup_JobGroup__H1m1m">
                <p className="JobGroup_JobGroup__title__nZmec">개발</p>
            </button>
            <button className="dev_more_btn">
                <img src="../img/free-icon-down-arrow-3833020.png" alt="" style={{height: '26px', width: '26px'}} />
            </button>

            <button className="dev_whole_btn">
                <p>개발전체</p>
            </button>
            <button className="dev_more_btn">
                <img src="../img/free-icon-down-arrow-3833020.png" alt="" style={{height: '26px', width: '26px'}} />
            </button>
            </div>
        </div>
        </div>

    );

}

export default DevTitle;