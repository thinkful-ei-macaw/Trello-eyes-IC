import store from './store';

function List(props) {

return (
<section class="List">
        <header class="List-header">
          <h2>{props.header}</h2>
        </header>
       {props.cards.map(card => 
        <Card id= {this.id} title={this.title} content={this.content} />
        </section>
        )};)
}
