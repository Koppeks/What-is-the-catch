import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentKindSchema } from './DocumentKindSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumDocumentKindNullableFilterSchema } from './NestedEnumDocumentKindNullableFilterSchema';

export const NestedEnumDocumentKindNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDocumentKindNullableWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => DocumentKindSchema).optional().nullable(),
  in: z.lazy(() => DocumentKindSchema).array().optional().nullable(),
  notIn: z.lazy(() => DocumentKindSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DocumentKindSchema), z.lazy(() => NestedEnumDocumentKindNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDocumentKindNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDocumentKindNullableFilterSchema).optional(),
});

export default NestedEnumDocumentKindNullableWithAggregatesFilterSchema;
