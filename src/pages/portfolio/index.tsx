import {Container, ListItemButton, ListItemText} from "@mui/material";
export default function Portfolio() {
    return (
        <Container maxWidth="sm">
            <h1>Portfolio</h1>
            <h2>MySkill</h2>
            <p>大学で、プログラミング言語やアルゴリズム、システム開発の流れなど幅広く学習しています。<br/>
                Linuxが好きで、普段はArchLinuxを触っています。最近はアプリケーション開発を学んでいます。
            </p>
            <p>
                <br/>
                開発ツール・環境
                <img src="https://skillicons.dev/icons?i=git,linux,vim,docker" alt="myskill"/>
                開発言語
                <img src="https://skillicons.dev/icons?i=c,java,bash,py,ts,html,css" alt="myskill"/>
                フレームワーク・ライブラリ
                <img src="https://skillicons.dev/icons?i=react,nextjs,spring,gradle,postgres,docker" alt="myskill"/>
                <br/>
                <br/>
            </p>
            <h1>プロジェクト</h1>
            <p>今まで参加したプロジェクトなど</p>
            <h2>個人開発</h2>
            <ListItemButton href="https://github.com/naoya0117/vim-tetris">
                <ListItemText primary="vim-tetris"  secondary={
                    <>
                        vimキー操作で動くテトリスです。
                        キー操作の他、viのモードやコマンド入力も実装しています。<br/>
                        C言語のncursesとpthread,環境構築にdocker,bash,makefileを使用しました。
                    </>
                }/>
            </ListItemButton>
            <ListItemButton href="https://naoya0117.github.io">
                <ListItemText primary="ポートフォリオサイト"  secondary={
                    <>
                        ポートフォリオサイトです。随時更新予定です。<br/>
                        開発にnext.js(typescript),docker, デプロイにgithub actionsを使用しています。
                    </>
                }/>
            </ListItemButton>
            <ListItemButton href="https://github.com/naoya0117/janken">
                <ListItemText primary="じゃんけんアプリ"  secondary={
                    <>
                        大学の共通の課題です。バックエンドについて学びました。<br/>
                        springboot,thymeleaf,H2database,Mybatis(Java)を使用しています。
                    </>
                }/>
            </ListItemButton>
            <h2>チーム開発</h2>
            <ListItemButton href="https://susumukun.vercel.app">
                <ListItemText primary="走れ!すすむくん"  secondary={
                    <>
                       学祭に向けてゼミで開発しているWebプラットフォームゲームです。<br/>
                       フロントエンド開発で主にReact.jsとPhaser(typescript)を触りました。
                    </>
                }/>
            </ListItemButton>
            <ListItemButton href="https://github.com/masaki555/Minecraft_Contest">
                <ListItemText primary="MinecraftBotContest 開発"  secondary={
                    <>
                        学内のマインクラフトbotコンテストに開発スタッフとして参加しています。<br/>
                        PythonとC言語を使用しますが、まだほとんど触れていません。
                    </>
                }/>
            </ListItemButton>
            <h2>ただの趣味</h2>
            <ListItemButton href="https://github.com/naoya0117/plasma-i3-kwin_sessions">
                <ListItemText primary="Plasmaとi3の統合デスクトップ環境"  secondary={
                    <>
                        ArchLinuxのi3とKDEのデスクトップ環境をいじって自分好みの環境を構築しています。
                        直接この知識が役立つことはあまりありませんが、設定ファイルやCUIを日常的に触ることで環境構築への苦手意識がなくなりました。
                    </>
                }/>
            </ListItemButton>
            <ListItemButton href="https://github.com/naoya0117/qemu-scripts">
                <ListItemText primary="Qemuの起動スクリプトの作成"  secondary={
                    <>
                        ArchLinuxをメインで使用していますが、qemuの仮想環境を使用して他ディストリビューションの学習も行っています。
                        かんたんに仮想環境を構築するために、起動スクリプトのテンプレートを作りました。
                    </>
                }/>
            </ListItemButton>
            <ListItemButton href="https://github.com/naoya0117/wsl-portforward">
                <ListItemText primary="wslポートフォワードスクリプトの作成"  secondary={
                    <>
                        wsl2にスマートフォンからアクセスするために、ポートフォワードの設定をpowershellで書きました。
                        かんたんな短いスクリプトですが、ここでwindowsにも触れていることをアピールしておきます。
                    </>
                }/>
            </ListItemButton>
            <ListItemButton href="https://github.com/naoya0117/vim_runtime">
                <ListItemText primary="vim設定の自動化"  secondary={
                    <>
                        仮想環境触るたびにvimの設定ファイルを書くが面倒だったので、
                        自分のvimの設定をbashを用いて自動化しました。普段から面倒な作業はBashで自動化させています。
                    </>
                }/>
            </ListItemButton>
        </Container>

    )
}