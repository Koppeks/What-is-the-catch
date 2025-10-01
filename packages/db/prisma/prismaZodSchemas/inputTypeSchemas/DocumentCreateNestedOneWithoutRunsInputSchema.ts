import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutRunsInputSchema } from './DocumentCreateWithoutRunsInputSchema';
import { DocumentUncheckedCreateWithoutRunsInputSchema } from './DocumentUncheckedCreateWithoutRunsInputSchema';
import { DocumentCreateOrConnectWithoutRunsInputSchema } from './DocumentCreateOrConnectWithoutRunsInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutRunsInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutRunsInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutRunsInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutRunsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutRunsInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentCreateNestedOneWithoutRunsInput>;

export default DocumentCreateNestedOneWithoutRunsInputSchema;
