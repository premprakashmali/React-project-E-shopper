import React from 'react'
import { Helmet } from 'react-helmet'

function Admin_404() {
    return (
        <div>
            <Helmet>

                {/* <!-- Bootstrap Core and vandor --> */}
                <link rel="stylesheet" href="Admin/plugins/bootstrap/css/bootstrap.min.css" />
                {/* <!-- Core css --> */}
                <link rel="stylesheet" href="Admin/css/main.css" />
                <link rel="stylesheet" href="Admin/css/theme1.css" />
            </Helmet>
            <div class="auth">
                <div class="auth_left">
                    <div class="card">
                        <div class="card-body">
                            <div class="display-3 text-muted mb-5"><i class="si si-exclamation"></i> 404</div>
                            <h1 class="h3 mb-3">Oops.. You just found an error page..</h1>
                            <p class="h6 text-muted font-weight-normal mb-3">We are sorry but our service is currently not available&hellip;</p>
                            <a class="btn btn-primary" href="javascript:history.back()"><i class="fe fe-arrow-left mr-2"></i>Go back</a>
                        </div>
                    </div>
                </div>
                <div class="auth_right full_img"></div>
            </div>
            <Helmet>
                <script src="Admin/bundles/lib.vendor.bundle.js"></script>
                <script src="Admin/js/core.js"></script>
            </Helmet>
        </div>
    )
}

export default Admin_404