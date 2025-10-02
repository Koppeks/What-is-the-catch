import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentKindSchema } from './DocumentKindSchema';

export const NestedEnumDocumentKindNullableFilterSchema: z.ZodType<Prisma.NestedEnumDocumentKindNullableFilter> = z.strictObject({
  equals: z.lazy(() => DocumentKindSchema).optional().nullable(),
  in: z.lazy(() => DocumentKindSchema).array().optional().nullable(),
  notIn: z.lazy(() => DocumentKindSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DocumentKindSchema), z.lazy(() => NestedEnumDocumentKindNullableFilterSchema) ]).optional().nullable(),
});

export default NestedEnumDocumentKindNullableFilterSchema;
