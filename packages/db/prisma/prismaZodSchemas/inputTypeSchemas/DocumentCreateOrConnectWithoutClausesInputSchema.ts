import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutClausesInputSchema } from './DocumentCreateWithoutClausesInputSchema';
import { DocumentUncheckedCreateWithoutClausesInputSchema } from './DocumentUncheckedCreateWithoutClausesInputSchema';

export const DocumentCreateOrConnectWithoutClausesInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutClausesInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutClausesInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutClausesInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentCreateOrConnectWithoutClausesInput>;

export default DocumentCreateOrConnectWithoutClausesInputSchema;
