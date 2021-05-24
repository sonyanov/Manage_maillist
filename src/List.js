import Info from './info';

function List(){
	let list = [
		{name: "first", email: "email.com", node: [
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"}]},
		{name: "second", email: "email.com", node: [
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"}]},
		{name: "third", email: "email.com", node: [
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"},
			{name: "Ivan", email: "email.com"}]}
	]
	
	return (
	<ul>
		{list.map(item => (<li>
			<div className="info">
				<p>{item.name} {item.email}</p>
				<button className="editor">Редактировать</button>
				<button className="delete">Удалить</button>
			</div>
			<ul>
				{item.node.map(i => (
					<li>{i.name} {i.email}</li>
				))}
			</ul>
		</li>))}		
	</ul>)
}

export default List;