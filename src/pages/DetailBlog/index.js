import React from 'react';
import {RegisterBg} from '../../assets';
import './detailBlog.scss';
import { Link, Gap } from '../../components';
import { useHistory } from 'react-router-dom';

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Voluptate tempor id exercitation esse culpa tempor adipisicing aute. Cupidatat duis irure proident aliqua officia sint. Minim nostrud enim cupidatat sit. Irure nisi consequat aliqua dolor ullamco aliqua veniam esse irure amet. Lorem quis enim duis occaecat quis. Lorem incididunt irure sint excepteur. Non nostrud velit est ut nisi.</p>
            <Gap height={20}/>
            <Link title="Kembali Ke Home" onClick={() => history.push("/")} />
            <Gap height={20}/>
        </div>
    )
}

export default DetailBlog
