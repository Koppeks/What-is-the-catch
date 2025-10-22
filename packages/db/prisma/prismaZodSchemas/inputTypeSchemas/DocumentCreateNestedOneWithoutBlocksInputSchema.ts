import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutBlocksInputSchema } from './DocumentCreateWithoutBlocksInputSchema';
import { DocumentUncheckedCreateWithoutBlocksInputSchema } from './DocumentUncheckedCreateWithoutBlocksInputSchema';
import { DocumentCreateOrConnectWithoutBlocksInputSchema } from './DocumentCreateOrConnectWithoutBlocksInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutBlocksInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutBlocksInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutBlocksInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutBlocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutBlocksInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
});

export default DocumentCreateNestedOneWithoutBlocksInputSchema;
