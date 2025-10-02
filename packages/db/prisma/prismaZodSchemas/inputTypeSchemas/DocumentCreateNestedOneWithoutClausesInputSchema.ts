import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutClausesInputSchema } from './DocumentCreateWithoutClausesInputSchema';
import { DocumentUncheckedCreateWithoutClausesInputSchema } from './DocumentUncheckedCreateWithoutClausesInputSchema';
import { DocumentCreateOrConnectWithoutClausesInputSchema } from './DocumentCreateOrConnectWithoutClausesInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutClausesInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutClausesInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutClausesInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutClausesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutClausesInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
});

export default DocumentCreateNestedOneWithoutClausesInputSchema;
