import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentKindSchema } from './DocumentKindSchema';
import { NestedEnumDocumentKindNullableFilterSchema } from './NestedEnumDocumentKindNullableFilterSchema';

export const EnumDocumentKindNullableFilterSchema: z.ZodType<Prisma.EnumDocumentKindNullableFilter> = z.object({
  equals: z.lazy(() => DocumentKindSchema).optional().nullable(),
  in: z.lazy(() => DocumentKindSchema).array().optional().nullable(),
  notIn: z.lazy(() => DocumentKindSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DocumentKindSchema),z.lazy(() => NestedEnumDocumentKindNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.EnumDocumentKindNullableFilter>;

export default EnumDocumentKindNullableFilterSchema;
