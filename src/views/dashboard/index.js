import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Container, Dropdown, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import CustomToggle from '../../components/dropdowns'
import ShareOffcanvas from '../../components/share-offcanvas'

import { postComment, getGetPosts } from '../../api/post/post'
import { postCreatePost, postCommentReply, getLikePost, getUnLikePost, getLikeComment, getUnLikeComment, getHidePost,getGetTrends } from '../../api/post/post'
import { getFollow,getUnFollow,getGetFollowers, getGetFollowings, getGetTopFollowers } from '../../api/followfollower/followfollower'
import { useSelector } from 'react-redux'
import Moment from 'react-moment';
//image
import user1 from '../../assets/images/user/1.jpg'
import user2 from '../../assets/images/user/02.jpg'
import user8 from '../../assets/images/user/08.jpg'
import user6 from '../../assets/images/user/06.jpg'
import img1 from '../../assets/images/small/07.png'
import img2 from '../../assets/images/small/08.png'
import img3 from '../../assets/images/small/09.png'
import img4 from '../../assets/images/small/10.png'
import img5 from '../../assets/images/small/11.png'
import img6 from '../../assets/images/small/12.png'
import img7 from '../../assets/images/small/13.png'
import img8 from '../../assets/images/small/14.png'
import loader from '../../assets/images/page-img/page-load-loader.gif'
const Index = () => {
    const login = useSelector(c => c)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [iscomment, setIsComment] = useState(false);
    const [allPost, setAllPost] = useState([])
    const [allFollower,setAllFollower] = useState([])
    const [allFollowings,setAllFollowings] = useState([])
    const [allTrends, setAllTrends] = useState([])
    const [Post_Id, setPost_Id] = useState(0)
    const [follow_Id, setFollow_Id]=useState(0)
    const [hidepostId, setHidePostId] = useState(0)
    const [text, setText] = useState('')
    const [islikedcomment, setIslikedComment] = useState(false)
    const [comment_Id, setComment_Id] = useState(0)
    const [isfollowed,setIsFollowed]=useState(false)
    const [ishided, setIsHided] = useState(false)
    const [isliked, setIsliked] = useState(false)
    const [tagName, setTagName] = useState('')
    const [post, setPost] = useState({
        Text: " ",
        Visibility: 1,
        Location: "",
        ImageUrls: "",
        UserTagId: []
    })
    const [commentorreply, setCommentorReply] = useState({
        Text: "string",
        Post_Id: 1,
        ParentComment_Id: 1
    })
    const [comment, setComment] = useState({
        Text: "testing",
        Post_Id: 2,
        ParentComment_Id: 1
    })
    const [replycomment, setReplyComment] = useState({
        Text: "string",
        Post_Id: 1,
        ParentComment_Id: 1
    })
    const handleClick = async () => {
        const token = sessionStorage.getItem('Token')
        await postCreatePost({ post, token }).then(res => console.log(res.data))
    }
    const getunlikes = async (id) => {
        setPost_Id(id)
        const token = sessionStorage.getItem('Token')
        setIsliked(!isliked)
        await getUnLikePost({ id, token }).then(res => res.data['Result'])
    }
    const getlikes = async (id) => {
        setPost_Id(id)
        const token = sessionStorage.getItem('Token')
        setIsliked(!isliked)
        await getLikePost({ id, token }).then(res => res.data['Result'])
    }
    const getlikecomment = async (id) => {
        setComment_Id(id)
        console.log(comment_Id)
        const token = sessionStorage.getItem('Token')
        setIslikedComment(!islikedcomment)
        await getLikeComment({ id, token }).then(res => res.data['Result'])
    }
    const getunlikecomment = async (id) => {
        setComment_Id(id)
        const token = sessionStorage.getItem('Token')
        setIslikedComment(!islikedcomment)
        await getUnLikeComment({ id, token }).then(res => res.data['Result'])
    }
    const gethidepost = async (id) => {
        setHidePostId(id)
        const token = sessionStorage.getItem('Token')
        setIsHided(!ishided)
        await getHidePost({ id, token }).then(res => res.data['Result']).then(console.log("hided"))
        setIsHided(!ishided)
    }
    const getPosts = async () => {
        const token = sessionStorage.getItem('Token')
        const data = { pagesize: 20, pageno: 0 };
        await getGetPosts({ data, token }).then(res => setAllPost(res.data['Result'].Posts))
    }
    const handleReply = async (e, obj) => {
        setIsComment(true);
        console.log(obj)
        setTimeout(() => {
            setIsComment(false)
        }, 15000)
    }
    const handleRequest = async (e, obj) => {
        e.preventDefault();
        const token = sessionStorage.getItem('Token');
        if (iscomment) {
            await postCommentReply({ commentorreply, token }).then(res => console.log(res.data)).then(alert('this is reply'))
            console.log(commentorreply)
            return;
        }
        setCommentorReply({
            ...commentorreply,
            Post_Id: obj.Id,
            ParentComment_Id: 0
        })
        console.log(commentorreply)
        await postComment({ commentorreply, token }).then(res => console.log(res.data)).then(alert('this is comment'))
        return;
    }
    const handleComment = (e, obj) => {
        e.preventDefault();
        const token = sessionStorage.getItem('Token');
        setCommentorReply({
            ...commentorreply,
            Text: text,
            Post_Id: obj.Id,
            ParentComment_Id: 0
        })
        console.log(commentorreply)
        console.log(text)
    }
    const getfollower = async ()=>{
        const token = sessionStorage.getItem('Token')
        await getGetFollowers({token}).then(res=>setAllFollower(res.data['Result']))
    }
     const getfollowings = async ()=>{
     const token = sessionStorage.getItem('Token')
     await getGetFollowings({token}).then(res=>setAllFollowings(res.data['Result']))
  }
    const gettopfollowers = async () => {
        const token = sessionStorage.getItem('Token')
        setIsFollowed(!isfollowed)
        await getGetTopFollowers({ token }).then(res => setAllFollower(res.data['Result']))
      
    }
    const getfollow = async (id)=>{
        setFollow_Id(id)
        const token = sessionStorage.getItem('Token')
        await getFollow({ id,token }).then(res => console.log(res.data['Result']))
    }
    const getunfollow = async (id)=>{
        setFollow_Id(id)
        const token = sessionStorage.getItem('Token')
        await getUnFollow({ id,token }).then(res => console.log(res.data['Result']))
    }
    const gettrends = async () =>{
        const token = sessionStorage.getItem('Token')
        await getGetTrends({ token }).then(res => setAllTrends(res.data['Result']))
    }
    const newDate = (date)=>{
    var createdDateTime = new Date(date + 'Z');
    return createdDateTime;
   
    }
    useEffect(() => {
        gettrends()
        getPosts()
        getfollower()
        getfollowings()
        // gettopfollowers()
      
    }, [isliked,islikedcomment,isfollowed,ishided])
    return (
        <>
       {console.log(allTrends)}
            <Container>
                <Row>
                    <Col lg={8} className="row m-0 p-0">
                        <Col sm={12} >
                            <Card id="post-modal-data" className="card-block card-stretch card-height">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Create Post</h4>
                                    </div>
                                </div>
                                <Card.Body >
                                    <div className="d-flex align-items-center">
                                        <div className="user-img">
                                            <img src={user1} alt="user1" className="avatar-60 rounded-circle" />
                                        </div>
                                        <form className="post-text ms-3 w-100  "   onClick={handleShow}>
                                            <input type="text" className="form-control rounded" name="Text" placeholder="Write something here..." onChange={(e)=>setPost({
                                                  ...post,
                                                  Text:e.target.value
                                               })
                                            } style={{border:"none"}} />
                                        </form>
                                    </div>
                                    <hr />
                                    <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">

                                        <li className="me-3 mb-md-0 mb-2">
                                            <label className=" btn btn-soft-primary"> <img src={img1} alt="" /> Photo/Video
                                                <input type="file" style={{ display: "none" }} placeholder="Enter Image" onChange={(e) => setPost({
                                                    ...post,
                                                    ImageUrls: e.target.value
                                                })} />
                                            </label>

                                        </li>
                                        <li className="me-3 mb-md-0 mb-2">

                                            <button className=" btn btn-soft-primary" onClick={getfollower}>
                                                <div className="card-header-toolbar d-flex align-items-center" >
                                                    <Dropdown onChange={() => setTagName}>
                                                        <Dropdown.Toggle as='div'>
                                                            <img src={img2} alt="icon" className="img-fluid me-2" /> Tag Friend
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <input type="text" placeholder="enter your friend's name" />
                                                            {allFollower.map(follow =>
                                                                <Dropdown.Item key={Math.random(10)} onClick={() => console.log(follow.FirstUser.Id)} href="#">{follow.FirstUser.FullName}</Dropdown.Item>
                                                            )}
                                                         </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="me-3">
                                            <Link to="#" className="btn btn-soft-primary">
                                                <img src={img3} alt="icon" className="img-fluid me-2" /> Feeling/Activity
                                            </Link>
                                        </li>
                                        <li>
                                            <button className=" btn btn-soft-primary">
                                                <div className="card-header-toolbar d-flex align-items-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle as='div'>
                                                            <i className="ri-more-fill h4"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={handleShow} href="#">Check in</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShow} href="#">Live Video</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShow} href="#">Gif</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShow} href="#">Watch Party</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShow} href="#">Play with Friend</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </Card.Body>
                                <Modal size="lg" className=" fade" id="post-modal" onHide={handleClose} show={show} >
                                    <Modal.Header className="d-flex justify-content-between">
                                        <Modal.Title id="post-modalLabel">Create Post</Modal.Title>
                                        <button type="button" className="btn btn-secondary" onClick={handleClose} ><i className="ri-close-fill"></i></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img">
                                                <img src={user1} alt="user1" className="avatar-60 rounded-circle img-fluid" />
                                            </div>
                                            <form className="post-text ms-3 w-100 " data-bs-toggle="modal" data-bs-target="#post-modal">
                                                <input type="text" className="form-control rounded" placeholder="Write something here... " style={{ border: "none" }} onChange={(e) => setPost({
                                                    ...post,
                                                    Text: e.target.value
                                                })} />
                                            </form>
                                        </div>
                                        <hr />
                                        <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">

                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3">
                                                    <label> <img src={img1} alt="" /> Photo/Video
                                                        <input type="file" style={{ display: "none" }} placeholder="Enter Image" onChange={(e) => setPost({
                                                            ...post,
                                                            ImageUrls: e.target.value
                                                        })} />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                    <button className="text-primary" style={{ background: "transparent", border: 0 }} onClick={getfollower}>
                                                        <div className="card-header-toolbar d-flex align-items-center" >
                                                            <Dropdown onChange={() => setTagName}>
                                                                <Dropdown.Toggle as='div'>
                                                                    <img src={img2} alt="icon" className="img-fluid me-2" /> Tag Friend
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <input type="text" placeholder="enter your friend's name" />
                                                                    {allFollower.map(follow =>
                                                                        <Dropdown.Item key={Math.random(10)} onClick={(e) => setPost({ ...post, UserTagId: [...post['UserTagId'], follow.FirstUser.Id] })} href="#">{follow.FirstUser.FullName}</Dropdown.Item>
                                                                    )}
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                    <img src={img3} alt="icon" className="img-fluid" /> Feeling/Activity</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                    <img src={img4} alt="icon" className="img-fluid" /> Check in</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                    <img src={img5} alt="icon" className="img-fluid" /> Live Video</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                    <img src={img6} alt="icon" className="img-fluid" /> Gif</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                    <img src={img7} alt="icon" className="img-fluid" /> Watch Party</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                    <img src={img8} alt="icon" className="img-fluid" /> Play with Friends</div>
                                            </li>
                                        </ul>
                                        <hr />
                                        <div className="other-option">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-img me-3">
                                                        <img src={user1} alt="user1" className="avatar-60 rounded-circle img-fluid" />
                                                    </div>
                                                    <h6>Your Story</h6>
                                                </div>
                                                <div className="card-post-toolbar">
                                                    <Dropdown  >
                                                        <Dropdown.Toggle as={CustomToggle} role="button">
                                                            <span className="btn btn-primary">Friend</span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className=" m-0 p-0">
                                                            <Dropdown.Item className=" p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                    <i className="ri-save-line h4"></i>
                                                                    <div className="data ms-2">
                                                                        <h6>Public</h6>
                                                                        <p className="mb-0">Anyone on or off Facebook</p>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className="p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                    <i className="ri-close-circle-line h4"></i>
                                                                    <div className="data ms-2">
                                                                        <h6>Friends</h6>
                                                                        <p className="mb-0">Your Friend on facebook</p>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className=" p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                    <i className="ri-user-unfollow-line h4"></i>
                                                                    <div className="data ms-2">
                                                                        <h6>Friends except</h6>
                                                                        <p className="mb-0">Don't show to some friends</p>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className=" p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                    <i className="ri-notification-line h4"></i>
                                                                    <div className="data ms-2">
                                                                        <h6>Only Me</h6>
                                                                        <p className="mb-0">Only me</p>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary d-block w-100 mt-3" onClick={() => handleClick()}>Post</button>
                                    </Modal.Body>
                                </Modal>
                            </Card>
                        </Col>

                        {allPost.map(item =>
                            <Col sm={12} key={item.Id}>


                                <Card className=" card-block card-stretch card-height">
                                    <Card.Body>
                                        <div className="user-post-data">
                                            <div className="d-flex justify-content-between">

                                                <div className="me-3">
                                                    <img className="rounded-circle img-fluid" src={item.User.ProfilePictureUrl} alt="" />
                                                </div>

                                                <div className="w-100">
                                                    <div className="d-flex justify-content-between">


                                                        <div>
                                                            <h5 className="mb-0 d-inline-block">{item.User.FullName}</h5>
                                                            <span className="mb-0 ps-1 d-inline-block">Added a post</span>
                                                            <p className="mb-0 text-primary"><Moment fromNow>{newDate(item.CreatedDate)}</Moment></p>
                                                        </div>
                                                        <div>
                                                            <button className="btn btn-sm btn-soft-primary" onClick={()=> item.IsUserFollow?<>{getunfollow(item.User_Id)}</>:getfollow(item.User_Id)}>{item.IsUserFollow?"Un Follow":"Follow"}</button>
                                                        </div>
                                                        <div className="card-post-toolbar">
                                                            <Dropdown>
                                                                <Dropdown.Toggle className="bg-transparent border-white">
                                                                    <i className="ri-more-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                              
                                                                    <Dropdown.Item className=" p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                            <div className="h4">
                                                                                <i className="ri-save-line"></i>
                                                                            </div>
                                                                            <div className="data ms-2">
                                                                                <h6>Save Post</h6>
                                                                                <p className="mb-0">Add this to your saved items</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item className="p-3" to="#">
                                                                        
                                                                        <div className="d-flex align-items-top" onClick={() =>gethidepost(item.Id)}>
                                                                            <i className="ri-close-circle-line h4"></i>
                                                                            <div className="data ms-2">
                                                                                <h6>Hide Post</h6>
                                                                                <p className="mb-0">See fewer posts like this.</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item className=" p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                            <i className="ri-user-unfollow-line h4"></i>
                                                                            <div className="data ms-2">
                                                                                <h6>Unfollow User</h6>
                                                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item className=" p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                            <i className="ri-notification-line h4"></i>
                                                                            <div className="data ms-2">
                                                                                <h6>Notifications</h6>
                                                                                <p className="mb-0">Turn on notifications for this post</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p>{item.Text}</p>
                                        </div>
                                        <div className="user-post">
                                            <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                                {item.Medias.map(val =>
                                                    <div className="row-span-2 row-span-md-1" key={val.Id}>
                                                        <img src={val.Url} alt="image" className="img-fluid rounded w-100" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="comment-area mt-3">
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="like-block position-relative d-flex align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="like-data">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={CustomToggle} >
                                                                    <a onClick={() => { item.IsLiked ? getunlikes(item.Id) : getlikes(item.Id) }}>
                                                                        <i className={item.IsLiked ? "las la-heart" : "lar la-heart"} id="like" style={{ fontSize: "26px", color: "red" }}></i>
                                                                    </a>
                                                                </Dropdown.Toggle>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={CustomToggle} id="post-option" >
                                                                    {item.LikesCount}
                                                                </Dropdown.Toggle>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <div className="total-comment-block">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle} id="post-option" >
                                                                {item.CommentsCount ? <> {item.CommentsCount} Commented</> : ""}
                                                            </Dropdown.Toggle>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                {/* <ShareOffcanvas sharecount={item.ShareCount} /> */}
                                            </div>
                                            <hr />
                                            <ul className="post-comments list-inline p-0 m-0">
                                                <li className="mb-2">
                                                    {item.Comments.map(val =>
                                                        <div className="d-flex" key={val.Id}>
                                                            <>
                                                                <div className="user-img" >
                                                                    <img className="avatar-35 rounded-circle img-fluid" />
                                                                </div>
                                                                <div className="comment-data-block ms-3">
                                                                    <h6>{item.User.FullName}</h6>

                                                                    <p className="mb-0">{val.Text}</p>
                                                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                                                        <a style={{cursor:"pointer"}} onClick={() => { val.IsLiked ? getunlikecomment(val.Id) : getlikecomment(val.Id) }}>
                                                                                {
                                                                                    val.IsLiked ? <> <i className="las la-heart"style={{ fontSize: "15px",color:"rgb(80, 181, 255)"}}></i></>:
                                                                                    <i className= "lar la-heart" style={{ fontSize: "15px"}}></i>
                                                                                }
                                                                           
                                                                        </a>
                                                                        <span style={{fontSize:"14px",marginRight:"7px",color:"rgb(80, 181, 255)"}}>{val.LikesCount ? <>{val.LikesCount}</>:<></>}</span>
                                                                        {/* <Link to="#" onClick={()=>{getlikecomment(val.Id)}}>Like</Link> */}
                                                                        <Link to="#" onClick={() => {
                                                                            setTimeout(() => {
                                                                                setIsComment(false)
                                                                            }, 10000)

                                                                            setCommentorReply({
                                                                                ...commentorreply,
                                                                                Post_Id: item.Id,
                                                                                ParentComment_Id: val.Id
                                                                            })
                                                                        }} >reply</Link>
                                                                        <Link to="#">translate</Link>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        </div>
                                                    )}
                                                </li>

                                            </ul>
                                            <form className="comment-text d-flex align-items-center mt-3" onSubmit={(e, n) => handleRequest(e, item)}  >
                                                <input type="text" className="form-control rounded" placeholder="Enter Your Comment" onChange={(e) => setCommentorReply({
                                                    ...commentorreply,
                                                    Text: e.target.value,
                                                    Post_Id: item.Id
                                                })} />
                                               
                                                <input type="submit" className="m-2 btn-lg btn-primary" style={{ backgroundColor: "#50b5ff", border: "0", color: "white", padding: "0px 15px" }} value="Comment" />
                                            </form>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}

                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <button className="btn btn-soft-primary mb-2" style={{ width: "200px" }}>Connect Account</button>
                                <button className="btn btn-soft-primary mb-2" style={{ width: "200px" }}>Be a signal provider</button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Hot Topics</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            <i className="ri-more-fill h4"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <Dropdown.Item href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <Card.Body>
                               <ul className="media-story list-inline m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center " key={Math.random(10)}>
                                        {/* <img src={user8} alt="story1" className="rounded-circle img-fluid" /> */}
                                        <div className="stories-data ms-3">
                                                <h6></h6>
                                            <p className="mb-0"><span>438 views</span> </p>
                                            <p><span>340 Discusse</span><em style={{ color: 'red', marginLeft: '4px' }}>+3</em></p>
                                        </div>
                                    </li>
                                </ul>
                                
                            </Card.Body>
                        </Card>

                        <Card>
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Who to Follow</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle}>
                                            <i className="ri-more-fill h4"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                            <Dropdown.Item href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <Card.Body>
                                <ul className="media-story list-inline m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center justify-content-around ">
                                        <img src={user8} alt="story1" className="rounded-circle img-fluid" />
                                        <div className="stories-data ">
                                            <h6></h6>
                                        </div>
                                        <div>
                                        {/* onClick={()=> getfollow(userid)} is followed? follow:unfollow */}
                                            <button className="btn btn-outline-primary btn-sm" >Follow</button>
                                        </div>
                                    </li>
                                     
                                    <li className="d-flex mb-4 align-items-center justify-content-around ">
                                        <img src={user2} alt="story1" className="rounded-circle img-fluid" />
                                        <div className="stories-data ">
                                            <h6>Paul Alex</h6>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-primary btn-sm">Follow</button>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-around ">
                                        <img src={user6} alt="story1" className="rounded-circle img-fluid" />
                                        <div className="stories-data">
                                            <h6>Angel Mary</h6>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-primary btn-sm" >Follow</button>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <div className="col-sm-12 text-center">
                        <img src={loader} alt="loader" style={{ height: "100px" }} />
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Index
