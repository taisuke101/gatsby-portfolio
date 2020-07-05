import React from "react"

import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>お問い合わせ</h3>
        <h4>質問、お問い合わせなどお気軽にどうぞ！</h4>
        <form action="https://formspree.io/moqknbne" method="POST">
          <div className="form-group">
            <input 
              type="text"
              name="name"
              placeholder="お名前" 
              className="form-control" 
            />
            <input 
              type="email"
              name="email" 
              placeholder="eメール" 
              className="form-control" 
            />
            <textarea 
              name="message"
              id=""
              rows="15"
              placeholder="メッセージ"
              className="form-control"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="submit-btn btn"
          >送信</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
