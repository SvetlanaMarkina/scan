import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { dropDocumentsInfo, getDocuments } from '../../../store/slices/histograms';
import {convertDocObjectToCard} from '../../../utils/convertDocObjectToCardInfo';
import './Cards.css';

const Cards = () => {
  const {publicationIds, documents} = useSelector(state => ({
    publicationIds: state.histograms.publicationIds,
    documents: state.histograms.documents
  }))

  const dispatch = useDispatch();
  const [offSet, setOffSet] = useState(0);
  useEffect(()=>{
    if(publicationIds.length){
      const idsForRequest = publicationIds.slice(offSet,  offSet+10)
      if(idsForRequest.length) {
        dispatch(getDocuments({ids:idsForRequest}))
      }
    }
  },[publicationIds,dispatch,offSet])

  if(!documents.length) {
    return null
  }
  const docs = convertDocObjectToCard(documents)
  const showTenArticles = () => {
    const idsForRequest = publicationIds.slice(offSet, 10);
    setOffSet((offSet)=>offSet+10)
  }
  let isDone = documents.length >= publicationIds.length
  return (
    <>
    <div className='cards__wrap'>
    {docs.map((obj, ind)=>
    
    <div className='cards__content' key={ind}>
        <div className='cards__dateArticle'>
          <span className='cards__span'>{obj.date}</span>
          <a 
          className='cards__article'
          href={obj.articleUrl}>{obj.articleUrlTitle}
          </a>
        </div>
        <h4 className='cards__title'>{obj.articleTitle}</h4>
        {obj.articleTags && obj.articleTags.map(tag => (
          <Badge bg="warning" text="dark" key={tag}>{tag}</Badge>
        ))}
        {obj.imageUrl && <img className='cards__img' src={obj.imageUrl} alt='article pic' />}
        <div dangerouslySetInnerHTML={{ __html: obj.articleContent }} />
        <div className='cards__buttonBox'>
          <form action={obj.articleUrl} target="_blank"> 
            <button className='cards__button'>Читать источник</button>
          </form>
          <section className='cards__section'>{obj.wordCount} слов&lang;а&rang;</section>
        </div>
    </div>         
      )}
  </div>
  <div className='adjustBox'>
    {!isDone && <button onClick={showTenArticles} className='cards__showBtn'>Показать больше</button>}
  </div>
  
  </>
)
}

export default Cards