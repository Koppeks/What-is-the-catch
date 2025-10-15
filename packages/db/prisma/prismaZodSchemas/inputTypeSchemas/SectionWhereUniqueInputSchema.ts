import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DocumentScalarRelationFilterSchema } from './DocumentScalarRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { BlockScalarRelationFilterSchema } from './BlockScalarRelationFilterSchema';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';
import { SectionNullableScalarRelationFilterSchema } from './SectionNullableScalarRelationFilterSchema';
import { SectionListRelationFilterSchema } from './SectionListRelationFilterSchema';
import { BlockListRelationFilterSchema } from './BlockListRelationFilterSchema';

export const SectionWhereUniqueInputSchema: z.ZodType<Prisma.SectionWhereUniqueInput> = z.union([
  z.object({
    id: z.cuid(),
    headingBlockId: z.string(),
  }),
  z.object({
    id: z.cuid(),
  }),
  z.object({
    headingBlockId: z.string(),
  }),
])
.and(z.strictObject({
  id: z.cuid().optional(),
  headingBlockId: z.string().optional(),
  AND: z.union([ z.lazy(() => SectionWhereInputSchema), z.lazy(() => SectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SectionWhereInputSchema), z.lazy(() => SectionWhereInputSchema).array() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  document: z.union([ z.lazy(() => DocumentScalarRelationFilterSchema), z.lazy(() => DocumentWhereInputSchema) ]).optional(),
  headingBlock: z.union([ z.lazy(() => BlockScalarRelationFilterSchema), z.lazy(() => BlockWhereInputSchema) ]).optional(),
  parent: z.union([ z.lazy(() => SectionNullableScalarRelationFilterSchema), z.lazy(() => SectionWhereInputSchema) ]).optional().nullable(),
  children: z.lazy(() => SectionListRelationFilterSchema).optional(),
  Block: z.lazy(() => BlockListRelationFilterSchema).optional(),
}));

export default SectionWhereUniqueInputSchema;
