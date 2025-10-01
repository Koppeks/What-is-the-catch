import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutClausesInputSchema } from './DocumentUpdateWithoutClausesInputSchema';
import { DocumentUncheckedUpdateWithoutClausesInputSchema } from './DocumentUncheckedUpdateWithoutClausesInputSchema';
import { DocumentCreateWithoutClausesInputSchema } from './DocumentCreateWithoutClausesInputSchema';
import { DocumentUncheckedCreateWithoutClausesInputSchema } from './DocumentUncheckedCreateWithoutClausesInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutClausesInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutClausesInput> = z.object({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutClausesInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutClausesInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutClausesInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutClausesInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentUpsertWithoutClausesInput>;

export default DocumentUpsertWithoutClausesInputSchema;
