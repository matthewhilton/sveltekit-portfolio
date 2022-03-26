<script>
import WorkItemGallery from "../components/WorkItemGallery.svelte";
import SocialButton from "../components/SocialButton.svelte";
</script>

<style>
    h1 {
        text-align: center;
        font-weight: 700;
        color: rgb(255, 255, 255);
    }

    #main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }

    .header h2 {
        color: #dfdfdf;
    }

    .social {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #codeicon {
        width: 65px;
        height: 41px;
    }

    .emphasis {
        background-color: #222222;
        color: #c9c9c9;
        padding: 5px;
        text-align: center;
        margin: 15px;
    }

    h2, h3, h4 {
        margin: 4px;
    }

    #catalyst {
        color: rgb(243, 61, 61);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #catalyst img {
        height: 40px;
        width: 70px;
    }

    .section {
        margin-bottom: 60px;
        margin-top: 10px;
    }
</style>

<div id="main">
    <h1> Matthew Hilton </h1>

    <div class="social">
        <SocialButton icon="linkedin-brands.svg" link="https://www.linkedin.com/in/matthew-hilton1234/"/>
        <SocialButton icon="envelope-solid.svg" link="mailto:mj.hilton@outlook.com"/>
        <SocialButton icon="github-brands.svg" link="https://github.com/matthewhilton"/>
    </div>

    <div class="emphasis">
        <h4> Currently working as: </h4>
        <h2> PHP Developer </h2>

        <div id="catalyst">
            <h3> Catalyst IT </h3>
            <img src="catalyst.gif" alt="code icon" id="codeicon" />
        </div>
    </div>

    <div class="section">
        <div class="header">
            <img src="code.gif" alt="code icon" id="codeicon" />
            <h2> Dev Projects </h2>
        </div>

        <WorkItemGallery type='dev'/>
    </div>

    <div class="section">
        <div class="header">
            <img src="art.gif" alt="code icon" id="codeicon" />
            <h2> Art Projects </h2>
        </div>

        <WorkItemGallery type='art'/>
    </div>
</div>