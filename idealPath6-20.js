var main = function(n, m, edge) {
	//n个点，m条边，edge【i】是一个不定长的数组，如果edge[i][j]的num是k，则i和k中有一条线，线的color为edge[i][j].color;

	var vis, inqueue;//vis每个节点是否被访问过 inqueue标记节点是否加入了队列，防止重复加入 
	var d,res;//d记录每个点到终点的最短距离 res记录最短路的颜色
	var MAXCOLOR = 0x7fffffff;

	var bfs1 = function() {
		//用于反向bfs 构建层次图，找最短路, d[0]存储了起点到终点的步数
		var stack = [];//宽度优先遍历，需要stack存放访问过的node

		for(var i = 0; i < n; i++) {
			vis[i] = 0;
			inqueue[i] = 0;
			d[i] = 0;
		}
		stack.push(n-1);
		while(stack.length){
	        var u=stack.shift();  //删除队列里第一个
	        vis[u]=1;
	        for(int i=0,len=edge[u].length; i<len; i++) {
	        	v = edge[u][i].num;
	        	if(!vis[v] && !inqueue[v]) {
            		d[v]=d[u]+1; 
					if(v==0)
						return; //找到起点，退出 
					stack.push(v);//如果不是起点，就把这个点入队 
					inqueue[v]=1;//入队标记 
				}
    		}
		}
	}

	var bfs2 = function() {
		//用于正向bfs 
		var stack = [];//宽度优先遍历，需要stack存放访问过的node

		for(var i = 0; i < n; i++) {
			vis[i] = 0;
			inqueue[i] = 0;
		}
		stack.push(0);
		while(stack.length > 0){
			var u=stack.shift();  //删除队列里第一个
			vis[u] = 1;
			if(u == n-1)
				return;
			var len = edge[u].length;
			var minc = MAXCOLOR;
			for(var i=0;i < len;i++) {
				var v=edge[u][i].num;
				if(!vis[v] && d[u]-1==d[v])
					minc = min(edge[u][i].color, minc);//获取所有路径中最小的颜色
			}
			for(int i=0;i<len;i++){
				var v=edge[u][i].num;
				if(!vis[v] && d[u]-1==d[v] && edge[u][i].color==minc && !inqueue[v]) {
					stack.push(v);
					inqueue[v]=1; //若有多组颜色相同,且未入队，则将其入队
				}
			}
			var index=d[0]-d[u];//获得当前步数对应的下标
			if(res[index]==0)
				res[index]=minc;
			else 
				res[index]=min(res[index],minc);//获取最小颜色 
		}
	}

	bfs1();
	bfs2();
	return res;
}