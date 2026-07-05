/// Generates a vendor properties struct from a flat table of `field: Type => "property.key"`.
///
/// Expands to a `#[derive(Clone, Debug, Default)]` struct with every field wrapped in
/// `Option<Type>`, plus a `pub(crate) fn new(properties: &[(String, String)]) -> Self`
/// that matches each known key and parses its value. Adding a property is a one-line
/// change: no separate constant, no separate match arm to keep in sync.
macro_rules! vendor_properties {
    (
        $(#[$struct_meta:meta])*
        pub struct $name:ident {
            $(
                $(#[$field_meta:meta])*
                $field:ident : $ty:ty => $key:literal
            ),* $(,)?
        }
    ) => {
        $(#[$struct_meta])*
        #[derive(Clone, Debug, Default)]
        pub struct $name {
            $(
                #[doc = concat!("`", $key, "`")]
                $(#[$field_meta])*
                pub $field: Option<$ty>,
            )*
        }

        impl $name {
            pub(crate) fn new(properties: &[(String, String)]) -> Self {
                let mut result = Self::default();
                for (name, value) in properties {
                    match name.as_str() {
                        $($key => result.$field = value.parse().ok(),)*
                        _ => {}
                    }
                }
                result
            }
        }
    };
}

pub(crate) use vendor_properties;
