function abc()
{
	var divi=document.createElement("div");
	divi.setAttribute("class","a");
	document.body.appendChild(divi);

	var div2=document.createElement("div");
	div2.setAttribute("class","e");
	divi.appendChild(div2);


	var aa=document.createElement("p");
	aa.setAttribute("class","b");
	var bb=document.createTextNode("Big Business");
	aa.appendChild(bb);
    div2.appendChild(aa);

    var cc=document.createElement("p");
	cc.setAttribute("class","c");
	var dd=document.createTextNode("Design by TEMPLATED");
	cc.appendChild(dd);
    div2.appendChild(cc);

    var divisi=document.createElement("div");
	divisi.setAttribute("class","d");
	divi.appendChild(divisi);

	var ul=document.createElement("ul");
	divisi.appendChild(ul);

	var list=document.createElement("li");
	var listnode=document.createTextNode("homepage");
	list.appendChild(listnode);
	ul.appendChild(list);

	var list1=document.createElement("li");
	var listnode1=document.createTextNode("products");
	list1.appendChild(listnode1);
	ul.appendChild(list1);

	var list2=document.createElement("li");
	var listnode2=document.createTextNode("services");
	list2.appendChild(listnode2);
	ul.appendChild(list2);

	var list3=document.createElement("li");
	var listnode3=document.createTextNode("clients");
	list3.appendChild(listnode3);
	ul.appendChild(list3);

	var list4=document.createElement("li");
	var listnode4=document.createTextNode("support");
	list4.appendChild(listnode4);
	ul.appendChild(list4);

	var list5=document.createElement("li");
	var listnode5=document.createTextNode("about");
	list5.appendChild(listnode5);
	ul.appendChild(list5);

	var list6=document.createElement("li");
	var listnode6=document.createTextNode("contacts");
	list6.appendChild(listnode6);
	ul.appendChild(list6);


    var divisi1=document.createElement("div");
	divisi1.setAttribute("class","g");
	divi.appendChild(divisi1);
     
     var image=document.createElement("img");
     image.setAttribute("src","../images/pic.jpg");
     image.setAttribute("class","h");
     divisi1.appendChild(image);


     var head=document.createElement("h2");
     head.setAttribute("class","h");
     var node=document.createTextNode("Welcome To Big Business");
     head.appendChild(node);
     divisi1.appendChild(head);



     var divisi2=document.createElement("div");
     divisi2.setAttribute("class","gg");
     divi.appendChild(divisi2);


     var para=document.createElement("p");
     para.setAttribute("class","i");
     var line=document.createTextNode("In this tutorial, the learning speed is your choice Everything is up to you If you are struggling, take a break, or reread thAlways make sure you understand the Try-it-Yourself exam");
      para.appendChild(line);
      divisi2.appendChild(para);

 





   }

