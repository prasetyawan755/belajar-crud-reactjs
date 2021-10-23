import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogItem.scss';
import { Button, Gap } from '../../atoms';
import { useHistory } from 'react-router-dom';

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="Post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ad ut est pariatur dolor culpa. Duis do quis enim anim. Proident ipsum eu magna sint ex officia velit do excepteur. Reprehenderit aliquip sint sit anim sint amet aute amet elit aliquip et.</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push("/detail-blog")} />
            </div>
        </div>
    )
}

export default BlogItem
