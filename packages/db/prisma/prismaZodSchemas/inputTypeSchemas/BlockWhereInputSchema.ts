import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DocumentScalarRelationFilterSchema } from './DocumentScalarRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { BlockNullableScalarRelationFilterSchema } from './BlockNullableScalarRelationFilterSchema';
import { BlockListRelationFilterSchema } from './BlockListRelationFilterSchema';

export const BlockWhereInputSchema: z.ZodType<Prisma.BlockWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BlockWhereInputSchema), z.lazy(() => BlockWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlockWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlockWhereInputSchema), z.lazy(() => BlockWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  ordinalPath: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  depth: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  meta: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  document: z.union([ z.lazy(() => DocumentScalarRelationFilterSchema), z.lazy(() => DocumentWhereInputSchema) ]).optional(),
  parent: z.union([ z.lazy(() => BlockNullableScalarRelationFilterSchema), z.lazy(() => BlockWhereInputSchema) ]).optional().nullable(),
  children: z.lazy(() => BlockListRelationFilterSchema).optional(),
});

export default BlockWhereInputSchema;
