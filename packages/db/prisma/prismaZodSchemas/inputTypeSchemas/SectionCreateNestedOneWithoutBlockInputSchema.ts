import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutBlockInputSchema } from './SectionCreateWithoutBlockInputSchema';
import { SectionUncheckedCreateWithoutBlockInputSchema } from './SectionUncheckedCreateWithoutBlockInputSchema';
import { SectionCreateOrConnectWithoutBlockInputSchema } from './SectionCreateOrConnectWithoutBlockInputSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';

export const SectionCreateNestedOneWithoutBlockInputSchema: z.ZodType<Prisma.SectionCreateNestedOneWithoutBlockInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutBlockInputSchema), z.lazy(() => SectionUncheckedCreateWithoutBlockInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SectionCreateOrConnectWithoutBlockInputSchema).optional(),
  connect: z.lazy(() => SectionWhereUniqueInputSchema).optional(),
});

export default SectionCreateNestedOneWithoutBlockInputSchema;
