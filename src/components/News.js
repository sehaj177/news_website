import React, { Component } from 'react'
import { NewsItem } from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "Jacques Billeaud",
    //         "title": "Oath Keepers founder Stewart Rhodes' path: From Yale to jail - The Associated Press - en Español",
    //         "description": "PHOENIX (AP) — Long before he assembled one of the largest far-right anti-government militia groups  in U.S.",
    //         "url": "https://apnews.com/article/oath-keepers-founder-jan-6-trial-4372b311695c401255c6881111ff4f41",
    //         "urlToImage": "https://storage.googleapis.com/afs-prod/media/5975bbf454df486ebf5fa456e08d92be/3000.jpeg",
    //         "publishedAt": "2022-09-26T16:30:01Z",
    //         "content": "PHOENIX (AP) Long before he assembled one of the largest far-right anti-government militia groups in U.S. history, before his Oath Keepers stormed the U.S. Capitol on Jan. 6, 2021, Stewart Rhodes was… [+14560 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Mary Ilyushina",
    //         "title": "Gunman attacks Russian military recruiter as thousands flee mobilization - The Washington Post",
    //         "description": "A recruitment officer at a military enlistment station in Irkutsk was shot and wounded by a young man as thousands continued to flee Russia's chaotic Ukraine mobilization.",
    //         "url": "https://www.washingtonpost.com/world/2022/09/26/mobilization-putin-russia-war-ukraine/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HPM24IR5REI63DDOSODL27GYEY.jpg&w=1440",
    //         "publishedAt": "2022-09-26T16:19:55Z",
    //         "content": "A young man shot and wounded the chief recruitment officer at a military enlistment station in Russias Irkutsk region on Monday, local authorities said, as thousands of fighting-age men continued to … [+9245 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Bank will 'not hesitate' to raise interest rates after pound's fall - BBC",
    //         "description": "The Bank of England will not hold an emergency meeting to set interest rates after the pound fell.",
    //         "url": "https://www.bbc.com/news/business-63039687",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/135AB/production/_126657297_gettyimages-895571146.jpg",
    //         "publishedAt": "2022-09-26T16:13:20Z",
    //         "content": "The Bank of England and the Treasury have both sought to reassure investors after the pound fell to a record low against the US dollar.\r\nThe Bank said it would \"not hesitate\" to hike interest rates t… [+2869 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Guardian"
    //         },
    //         "author": "Hugo Lowell",
    //         "title": "White House switchboard called phone linked to January 6 rioter after attack - The Guardian US",
    //         "description": "Claim of call at 4.34pm made in book by former Republican congressman and adviser to House select committee",
    //         "url": "https://amp.theguardian.com/us-news/2022/sep/26/white-house-call-january-6-rioter-denver-riggleman-book-the-breach",
    //         "urlToImage": "https://i.guim.co.uk/img/media/f7639ed75cb135dd059101497f1dd7817e7c1233/0_19_3500_2102/master/3500.jpg?width=620&quality=85&auto=format&fit=max&s=5053e41d34f7bedcc23a5907883d91f7",
    //         "publishedAt": "2022-09-26T15:59:00Z",
    //         "content": "BooksClaim of call at 4.34pm made in book by former Republican congressman and adviser to House select committee\r\nMon 26 Sep 2022 11.00 EDT\r\nThe White House switchboard dialled a phone associated wit… [+5324 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Giorgia Meloni: Italy's far right wins election and vows to govern for all - BBC",
    //         "description": "Giorgia Meloni is set to lead a right-wing coalition as Italy's first female PM.",
    //         "url": "https://www.bbc.com/news/world-europe-63029909",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EB73/production/_126857206_giorgia_meloni_reuters.jpg",
    //         "publishedAt": "2022-09-26T15:38:31Z",
    //         "content": "By Paul KirbyBBC News, Rome\r\nMedia caption, Giorgia Meloni claims victory in Italy's general election\r\nFar-right leader Giorgia Meloni has claimed victory in Italy's election, and is on course to bec… [+5684 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "DANICA KIRKA and JILL LAWLESS Associated Press",
    //         "title": "British pound plunges to new low as tax cuts spark concern - ABC News",
    //         "description": "The British pound has fallen to an all-time low against the U.S. dollar after the government pledged a sweeping package of tax cuts that have fueled concerns about its economic policy",
    //         "url": "https://abcnews.go.com/International/wireStory/british-pound-plummets-lows-us-dollar-90512061",
    //         "urlToImage": "https://s.abcnews.com/images/International/WireAP_4a1a24524b354effbf77c6985f5b24f7_16x9_992.jpg",
    //         "publishedAt": "2022-09-26T15:11:15Z",
    //         "content": "LONDON -- The British pound fell to all-time low against the U.S. dollar early Monday after Treasury chief Kwasi Kwarteng pledged a sweeping package of tax cuts, fueling concerns about the government… [+5816 chars]"
    //     }
    // ]
    static defaultProps={
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes={
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase()+ string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,

            page: 1
        }
        document.title=`Sach News- ${this.capFirstLetter(this.props.category)}`;
    }
    async updateNews(pageNo){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6005ac20d2aa473992dcde16ec9b9855&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState ({
            loading: true
        });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false})
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevClick = async () => {
        console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6005ac20d2aa473992dcde16ec9b9855&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState  ({
        //     loading: true
        // });
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

        this.setState({page:this.state.page-1})
        this.updateNews();

    }
    handleNextClick = async () => {
        console.log("Next");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize  ))) {


        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6005ac20d2aa473992dcde16ec9b9855&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState ({
        //         loading: true
        //     });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     console.log(parsedData);
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({page:this.state.page-1})
        this.updateNews();
    }

    render() {
        return (
            <div className='container  my-3' >
                <h1 className='text-center'style={{marginTop:'90px'}} >Headlines related to - {this.capFirstLetter(this.props.category)}</h1>
                {this.state.loading && <Spinner />}
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn  btn-warning" onClick={this.handlePrevClick}> &larr; Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn  btn-warning" onClick={this.handleNextClick}>Next &rarr; </button>
                </div> */}
                <div className="row"  >
                    {!this.state.loading && this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>

                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} author={element.author ? element.author:"Unknown"} description={element.description ? element.description.slice(0, 80) : "No information available here. Check the follow up link for the complete news."} imageUrl={element.urlToImage ? element.urlToImage : ""} date={element.publishedAt ? element.publishedAt:"null"} newsUrl={element.url ? element.url : ""} source={element.source.name ? element.source.name:"N/A  "} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} style={{position: 'relative'}} type="button" className="btn  btn-warning" onClick={this.handlePrevClick}> &larr; Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn  btn-warning" style={{position: 'relative'}} onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}